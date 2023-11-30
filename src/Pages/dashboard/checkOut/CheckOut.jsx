

import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import jsPDF from "jspdf";
import { Helmet } from "react-helmet-async";



const CheckOut = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const doc = new jsPDF();
    const { data: check = [], refetch } = useQuery({
        queryKey: ['check'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/check?email=${user.email}`);
            return res.data;
        }
    })

    const handleGetPaid = async (item) => {
        const soldDate = new Date().toLocaleDateString()
        const allProduct = {
            shopName: item.name,
            cost: item.cost,
            quantity: item.quantity,
            location: item.location,
            margin: item.margin,
            count: item.count,
            discount: item.discount,
            image: item.image,
            description: item.description,
            name: user.displayName,
            email: user.email,
            addedDate: new Date().toLocaleDateString(),
            sellingPrice: item.sellingPrice,
            saleCount: 0,
            shopId: item._id,
            soldDate
        }
        
        axiosPublic.post('sales',allProduct)
        .then(res=>console.log(res.data))
        axiosPublic.put(`/check/${item?.shopId}/increment`)
            .then(res => console.log(res.data))

        axiosPublic.put(`/check/${item?.shopId}/decrement`)
            .then(res => console.log(res.data))

        axiosPublic.delete(`/check/${item._id}`)
            .then(res => {
                if (res.data?.deletedCount) {
                    refetch()
                    toast.success('Product sold successfullY')
                }



            })
        doc.text(`${item.shopName}`,100,20,null,null, "center");
        doc.addImage(`${item.image}`, "JPEG", 15, 40, 180, 100);
        doc.text(`selling Price :${item.sellingPrice}`, 20, 170);
        doc.text(`Discount Price :${item.discount}`, 20, 180);
        doc.save(`${item.shopName}`.pdf)




    }

    return (
        <div>
            <Helmet>
            <title>CircuitFlow | check out</title>
        </Helmet>
            <h2 className="text-3xl font-bold text-center my-10"> Check IN</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Sale Count</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            check?.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="text-center">{item.quantity}</td>
                                <td className="text-center">{item.saleCount}</td>

                                <td>
                                    <button
                                        onClick={() => handleGetPaid(item)}
                                        className="btn bg-red-200 btn-lg">
                                        Get Paid
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>

        </div>

    );
};

export default CheckOut;