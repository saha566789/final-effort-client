import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import CheckFrom from "./CheckFrom";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const {id}= useParams()
    return (
        <div>
            <SectionTittle heading="Payment" ></SectionTittle>
            <div>
                <Elements stripe={stripePromise}>
                   <CheckFrom id={id}></CheckFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;