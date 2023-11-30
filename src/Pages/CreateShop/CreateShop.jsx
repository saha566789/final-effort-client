
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth"
import { Helmet } from "react-helmet-async";



const CreateShop = () => {
    const {user} = useAuth()
    

   
    
    const handleAddProduct = async(e) => {
      
      
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const location = form.location.value;
        const info = form.info.value;
        const email = form.email.value;
        const shopName = form.shopName.value;
        
        const newProduct = { name, image, info,location,email,shopName }
        console.log(newProduct)
       
        fetch('https://final-effort-server-pi.vercel.app/server', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                 if(data.insertedId){
                    const mangerInfo ={
                        name,
                        image,
                        shopId:data.insertedId,
                        role:"manager"
                    }
                    fetch(`https://final-effort-server-pi.vercel.app/user/manager/${email}`,{ 
                        method:'PATCH',
                        headers:{
                            'content-type': 'application/json'
                        },
                        body:JSON.stringify(mangerInfo)
                       
                     })
                     .then(res => res.json())
                       .then(data =>{
                        console.log(data)
                        if(data.modifiedCount>0){
                            toast.success('Shop added successFully.')
                        }
                        else{
                            toast.success('Shop added successFully')}
                       })
                      
                   
                 }
            })
    
       
    }
    return (
      <div>
        <Helmet><title>CircuitFlow | Create shop</title></Helmet>
          <div className="bg-[#F4F3F0]">
             <h2 className="lg:text-3xl text-xl font-extrabold text-center">Create a shop</h2>
            <div className=" lg:p-24">
       
        <form onSubmit={handleAddProduct}>
            {/* form name and image row */}
            <div className="md:flex  mb-8">
                <div className="form-control   md:w-1/2">
                    <label className="label">
                        <span className="label-text">Shop Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="name" placeholder="Shop Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-0 lg:ml-4">
                    <label className="label">
                        <span className="label-text">Shop Logo</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="image" placeholder="Shop Logo" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form  row-2 */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Shop Location</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="location" placeholder="Shop Location" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-0 lg:ml-4">
                    <label className="label">
                        <span className="label-text">Shop info</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="info" placeholder="Shop Info" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
             {/* form  row-3 */}
             <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Shop-Owner Email</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="email" readOnly defaultValue={user.email}  placeholder="Email" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-0 lg:ml-4">
                    <label className="label">
                        <span className="label-text">Shop-Owner Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="shopName" readOnly defaultValue={user.displayName} placeholder="Shop-Owner Name" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            <input 
        
             type="submit" value="create shop" className="btn btn-block bg-slate-800 text-white " />
        </form>
    </div>
        </div>
      </div>
    );
};

export default CreateShop;