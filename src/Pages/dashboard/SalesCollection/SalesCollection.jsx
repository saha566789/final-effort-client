import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import '../../dashboard/SalesCollection/sales.css'
import { Helmet } from "react-helmet-async";


const SalesCollection = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const [sales, setSales] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [count, setCount] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const { data: salesData = [] } = useQuery({
        queryKey: ['sales'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/sales?email=${user.email}`);
            return res.data;
        }
    });

    const totalInvest = salesData.reduce((total, item) => parseInt(total) + parseInt(item.cost), 0);
    const profit = totalInvest - sales.length;

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch(`http://localhost:5000/salesCount`)
            .then(res => res.json())
            .then(data => setCount(data.count));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/sales?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setSales(data));
    }, [currentPage, itemsPerPage, salesData]);

    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        setItemsPerPage(val);
        setCurrentPage(0);
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
       <div>
        <Helmet>
            <title>CircuitFlow | sales collection</title>
        </Helmet>
         <div className="lg:flex lg:flex-row flex-col gap-2">
            <div className="card w-72 bg-yellow-200 text-black">
                <div className="card-body">
                    <h2 className="card-title">Total Sales</h2>
                    <p>{salesData.length}</p>
                   
                </div>
            </div>
            <div className="card w-72 bg-blue-300 text-black">
                <div className="card-body">
                    <h2 className="card-title">Total Invest</h2>
                    <p>${totalInvest}</p>
                   
                </div>
            </div>
            <div className="card w-72 bg-pink-200 text-black">
                <div className="card-body">
                    <h2 className="card-title">Profit</h2>
                <p>${profit}</p>
                   
                </div>
            </div>
           
        </div>
        <h2 className="text-3xl font-bold text-center my-10"> Sales history</h2>
        <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            
                            <th>Product Name</th>
                            <th>Sold Date</th>
                            <th>Product Profit</th>
                           

                        </tr>
                    </thead>
                    <tbody>
                        {
                            salesData?.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                
                                <td>
                                    {item.name}
                                </td>
                                <td className="">{item.soldDate}</td>
                                <td className="">{profit}</td>

                               
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
            <div className='pagination'>
                <button className="btn bg-green-200" onClick={handlePrevPage}>Prev</button>
                {pages.map(page => (
                    <button
                        key={page}
                        className={currentPage === page ? 'selected' : undefined}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ))}
                <button className="btn bg-green-200" onClick={handleNextPage}>Next</button>
                <select value={itemsPerPage} onChange={handleItemsPerPage}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
       </div>
    );
};

export default SalesCollection;