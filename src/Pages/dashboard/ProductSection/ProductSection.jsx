
import useCategory from "../../../Hooks/useCategory";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Navigate, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const ProductSection = () => {
    const {user} = useAuth()
    const [menu] = useCategory()
   const navigate= useNavigate()
    const axiosPublic= useAxiosPublic()
    const [total,setTotal] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
  const [filteredMenu, setFilteredMenu] = useState([]);
  useEffect(() => {
    fetch(`https://final-effort-server-pi.vercel.app/menu?email=${user?.email}`)

        .then(res => res.json())
        .then(data => setTotal(data))
        
}, [user])

    const handleCheckOut=async(item)=>{
        console.log(item,'valo')
        const product = {
           shopName:item.name,
            cost:item.cost,
            quantity:item.quantity,
            location: item.location,
            margin: item.margin,
            count: item.count,
            discount: item.discount,
            image: item.image,
            description: item.description,
            name:user.displayName,
            email:user.email,
            addedDate:new Date().toLocaleDateString(),
            sellingPrice:item.sellingPrice,
            saleCount:0,
            shopId:item._id
        }
    
        axiosPublic.post('/check', product)
        .then(res=>{
            if(res.data?.insertedId){
               navigate('/dashboard/checkOut')
            }
        })
        
        
    }

  const handleSearch = () => {
    const filteredProducts = menu.filter((item) =>
      item._id.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMenu(filteredProducts);
  };
//  console.log(total)
    return (
        <div>
            <Helmet>
            <title>CircuitFlow | Product collection</title>
        </Helmet>
            <div className="join flex justify-center items-center">
        <input
          className="input input-bordered join-item"
          placeholder="Product ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="btn join-item rounded-r-full bg-red-400"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    Product Id (_id)

                                </th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Product Quantity</th>
                                <th>Discount</th>
                                <th>Price</th>



                            </tr>
                        </thead>
                        <tbody>
                            {
                              (filteredMenu.length ? filteredMenu : total)?.map((item) => <tr key={item._id}>
                                    <td>
                                        {item._id}
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
                                    <td className="text-center">{item.discount}%</td>
                                    <td className="text-center">{item.sellingPrice}</td>
                                    <td>
                                        
                                            <button
                                            onClick={()=>handleCheckOut(item)}
                                                className="btn btn-ghost btn-lg bg-red-500">
                                                Check-out
                                            </button>
                                        
                                    </td>

                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;