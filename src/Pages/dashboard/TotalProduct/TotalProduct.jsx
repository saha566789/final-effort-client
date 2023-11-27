import { useEffect, useState } from "react";

import AddProduct from "./AddProduct";
import AllProduct from "../AllProduct/AllProduct";



const TotalProduct = () => {

    const [total,setTotal] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => setTotal(data))
    }, [])
    return (
      <div>
          <div className="border-t-2 border-b-2 flex justify-between">
          
          <h2>
              {
                   total.length? <div>total {total.length} Products</div>: "no product"
              }
          </h2>
          {/* <button className="btn btn-active btn-secondary">Add product</button> */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Add product</button>
          <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                  <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <div>
             <AddProduct></AddProduct>
          </div>
              </div>
          </dialog>
      </div>
      <div>
        <AllProduct></AllProduct>
      </div>
      </div>
    );
};

export default TotalProduct;