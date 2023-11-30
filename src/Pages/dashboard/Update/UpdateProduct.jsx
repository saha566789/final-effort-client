import { set, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";





const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
    // const {name,location,quantity,discount,sellingPrice,description,margin,  _id} = useLoaderData();
    // console.log(name)
    const [update,setUpdate] = useState({})
    const {id} = useParams()
    console.log(id)
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic()
   useEffect(()=>{
    fetch(`https://final-effort-server-pi.vercel.app/menu/${id}`)
    .then(res=>res.json())
    .then(data=>setUpdate(data))
   },[id])
    console.log(update)
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        
        });
       
        if (res.data.success){
            // Calculate SellingPrice
        //    let tax = data.cost * (7.5 /100)
        //    let profit =data.cost *(data.margin /100)
        //    let sellingPrice = data.cost +tax+ profit

// now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                cost: data.cost,
                quantity:data.quantity,
                location: data.location,
                margin: data.margin,
                price: data.price,
                discount: data.discount,
                date: data.date,
                image: res.data.data.display_url,
                description: data.description,
                sellingPrice:data.sellingPrice
            }
            const menuRes = await axiosPublic.patch(`/menu/${id}`, menuItem);
            // console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    };
    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full my-6">
                <label className="label">
                    <span className="label-text">Product Name*</span>
                </label>
                <input
                    type="text"
                    defaultValue={update.name}
                    placeholder="Product Name"
                    {...register('name', { required: true })}
                    required
                    className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full my-6">
                <label className="label">
                    <span className="label-text"> Product Location*</span>
                </label>
                <input
                    type="text"
                    defaultValue={update.location}
                    placeholder=" Product Location"
                    {...register('location', { required: true })}
                    required
                    className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full my-6">
                <label className="label">
                    <span className="label-text">  Profit Margin*</span>
                </label>
                <input
                    type="number"
                    defaultValue={update.margin}
                    placeholder="  Profit Margin"
                    {...register('margin', { required: true })}
                    required
                    className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full my-6">
                <label className="label">
                    <span className="label-text">  Discount*</span>
                </label>
                <input
                    type="number"
                    defaultValue={update.discount}
                    placeholder=" Discount"
                    {...register('discount', { required: true })}
                    required
                    className="input input-bordered w-full" />
            </div>
            <div className="flex gap-6">
                {/* category */}
                <div className="form-control w-full my-6">
                <label className="label">
                    <span className="label-text">Product Quantity*</span>
                </label>
                <input
                    type="number"
                    defaultValue={update.quantity}
                    placeholder="Product Quantity"
                    {...register('quantity', { required: true })}
                    required
                    className="input input-bordered w-full" />
            </div>
              

                

            </div>
            
            <div className="form-control w-full my-6">
                <label className="label">
                    <span className="label-text"> Buying Price*</span>
                </label>
                <input
                    type="text"
                    defaultValue={update.sellingPrice}                    
                    placeholder=" Buying Price"
                    {...register('sellingPrice', { required: true })}
                    required
                    className="input input-bordered w-full" />
            </div>
           
            <div className="form-control">
                <label className="label">
                    <span className="label-text"> Description</span>
                </label>
                <textarea
                 defaultValue={update.description} 
                 {...register(' description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
            </div>

            <div className="form-control w-full my-6">
                <input  {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
            </div>

            <button className="btn bg-red-500">
               updateProduct
            </button>
        </form>
    </div>
    );
};

export default UpdateProduct;