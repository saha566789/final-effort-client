

const Contact = () => {
    return (
        
     <div className="bg-base-200 my-4">
     <h2 className="text-center font-bold text-red-600 text-4xl">Contact form</h2>
        <div className="card flex-shrink-0 w-full max-w-sm mx-auto  ">
        
        <form className="card-body">
           <div className="form-control">
            
             <input type="Text" placeholder="name" className="input w-full lg:w-96 input-bordered" required />
           </div>
           <div className="form-control">
          
             <input type="email" placeholder="Email" className="input w-full lg:w-96 input-bordered" required />
           
           </div>
           <div className="form-control">
          
             <input type="contact number" placeholder="Contact Number" className="input w-full lg:w-96 input-bordered" required />
           
           </div>
           <div className="form-control">
          
           <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-full lg:w-96" ></textarea>
        
           
           </div>
           <div className="form-control mt-6">
             <button className="btn w-full pl-4 lg:ml-6  text-white bg-red-200">Send</button>
           </div>
         </form>
        </div>
  </div>
    );
};

export default Contact;