import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAuth from "../../../Hooks/useAuth";




const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
  
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        
        });
       
        if (res.data.success) {

            

            // Calculate SellingPrice
           let tax = data.cost * (7.5 /100)
           let profit =data.cost *(data.margin /100)
           let sellingPrice = data.cost +tax+ profit


            





            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                cost: parseInt(data.cost),
                quantity:parseInt(data.quantity),
                location: data.location,
                margin: data.margin,
                count: data.count,
                discount: data.discount,
                date: data.date,
                image: res.data.data.display_url,
                description: data.description,
                sHopName:user.displayName,
                email:user.email,
                addedDate:new Date().toLocaleDateString(),
                sellingPrice,
                saleCount:0,
                shopId:user._id
            }
           console.log(data.description)
            const menuRes = await axiosPublic.post('/menu', menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
               
                // show success popup
                reset();
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        
    }
     
        console.log( 'with image url', res.data);
        
    }
  
    
    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full my-6">
                <label className="label">
                    <span className="label-text">Product Name*</span>
                </label>
                <input
                    type="text"
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
                    placeholder="Product Quantity"
                    {...register('quantity', { required: true })}
                    required
                    className="input input-bordered w-full" />
            </div>
                <div className="form-control w-full my-6">
                <label className="label">
                    <span className="label-text">ProductionCost*</span>
                </label>
                <input
                    type="number"
                    placeholder="ProductionCost"
                    {...register('cost', { required: true })}
                    required
                    className="input input-bordered w-full" />
            </div>

                

            </div>
            
            <div className="form-control w-full my-6">
                <label className="label">
                    <span className="label-text"> Product Count*</span>
                </label>
                <input
                    type="number"
                    placeholder=" Product count"
                    {...register('count', { required: true })}
                    required
                    className="input input-bordered w-full" />
            </div>
           
            <div className="form-control">
                <label className="label">
                    <span className="label-text"> Description</span>
                </label>
                <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
            </div>

            <div className="form-control w-full my-6">
                <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
            </div>

            <button  className="btn bg-red-300">
                Add Product
            </button>
        </form>
    </div>
    );
};

export default AddProduct;