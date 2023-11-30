import { useEffect, useState } from "react";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Subscription = () => {
    const [cost,setCost] = useState([]);
  
    
    // useEffect(() => {
    //     fetch('https://final-effort-server-pi.vercel.app/doller')
    //     .then(res => res.json())
    //         .then(data => setCost(data))
    // }, [])
    useEffect(() => {
        fetch('https://final-effort-server-pi.vercel.app/doller')
          .then(res => res.json())
          .then(data => setCost(data))
          .catch(error => console.error("Error fetching data:", error));
      }, []);
   
    return (
        <div>
        <Helmet>
            <title>CircuitFlow | Subscription and Payment</title>
        </Helmet>
            <SectionTittle
            heading='Subscription'
            ></SectionTittle>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
           {
            cost?.map(costItem=><>
                <div key={costItem._id} className="card  bg-yellow-200 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Spent ${costItem.cost}</h2>
                <p> increase the limit to {costItem.amount}</p>
                <div className="card-actions justify-end">
                   <Link to={`/dashboard/payment/${costItem._id}` } costItem={costItem._id}>
                     <button className="btn text-white bg-red-600">
                        Pay</button></Link>
                </div>
            </div>
        </div>
   
      </> )
           }
                </div>
        </div>
    );
};

export default Subscription;