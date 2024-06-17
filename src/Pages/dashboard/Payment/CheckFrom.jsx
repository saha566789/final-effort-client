import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";





const CheckFrom = ({id}) => {
    
     const [cost,setCost] =useState('')
     const {user} = useAuth()
    const [clientSecret, setClientSecret] = useState('')
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosPublic = useAxiosPublic()
    const [shopId,setShopId] =useState()
    const {data: server= [], } = useQuery({
        queryKey: ['server',user.email], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/server?email=${user.email}`);
            return res.data;
        }
    })
    useEffect(()=>{
       if(server && server.length>0){
         setShopId(server[0]._id)
       }
       else{
        console.log('no data')
       }
    },[server])
    useEffect(() => {
        fetch(`http://localhost:5000/doller/${id}`)
            .then(res => res.json())
            .then(data => setCost(data))
    }, [id])
    const price = cost.cost
    console.log(price)
    useEffect(() => {
        if (price > 0) {
            axiosPublic.post('/create-payment-intent', { price: price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosPublic, price])

   

   const currentLimit= parseInt(cost.amount)
    console.log(currentLimit)
 
     const handlePay =async()=>{
     const updateLimit =await axiosPublic.put(`/server/${id}/increment?limit=${cost.amount}`)
     console.log(updateLimit.cost)
     }



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        
        if(paymentIntent){
                 if(paymentIntent.status==="succeeded" ){
                    axiosPublic.put(`/server/${shopId}/increment?limit=${cost.amount}`)
                    .then(res=>{
                        if(res.data.modifiedCount>0){
                            toast.success('limit added')
                        }
                    })
                      
                 }
                 
        }
    
    }
    return (
       <form onSubmit={handleSubmit}>
           <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button 
            onClick={handlePay}
            className="btn btn-sm btn-primary my-4"
             type="submit" 
             disabled={!stripe || !clientSecret}
           >
                Pay
            </button>
            <p className="text-red-600">{error}</p>
       </form>
    );
};

export default CheckFrom;