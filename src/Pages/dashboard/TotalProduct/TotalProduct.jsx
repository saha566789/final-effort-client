import { useEffect, useState } from "react";

import AddProduct from "./AddProduct";
import AllProduct from "../AllProduct/AllProduct";
import useCart from "../../../Hooks/useCart";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";



const TotalProduct = () => {
   const {user} = useAuth()
    const [total,setTotal] = useState([]);
    const [cart] = useCart()
   const limit = cart?.map(item =>item.limit)
   console.log(limit[0])
   const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:5000/menu?email=${user?.email}`)

            .then(res => res.json())
            .then(data => setTotal(data))
    }, [user])
    const handleAddProduct = ()=>{
        navigate('/dashboard/subscription')
    }
  console.log(total)
    return (
      <div>
          <div className="border-t-2 border-b-2 flex justify-between">
          
          <h2>
              {
                   total.length?
                   <div>total {total.length} Products</div>: 
                   <div className="ml-96">No product</div>
              }
              
          </h2>
          
          {/* <button className="btn btn-active btn-secondary">Add product</button> */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
         {
            total.length >=limit[0] ? <button className="btn" onClick={handleAddProduct}>Add Product </button> : 
             <>
             {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-red-400" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add product</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <AddProduct></AddProduct>
  </div>
</dialog>
          
             
             </>
         }
      {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Add product</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div>
               
            </div>
                </div>
            </dialog> */} 
      </div>
          <div>
        <AllProduct total={total}></AllProduct>
      </div>
      </div>
    );
};

export default TotalProduct;