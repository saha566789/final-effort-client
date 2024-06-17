import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FaClipboardCheck, FaHome, FaShoppingCart } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import useAuth from "../Hooks/useAuth";
import Footer from "../Pages/Shared/Footer/Footer";
import useManger from "../Hooks/useManger";
import { MdOutlinePayment } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const DashBoard = () => {
  const axiosPublic = useAxiosPublic()
  const { user, logout } = useAuth()
  const isManager = useManger()
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

 
  const handleLogOut = () => {
    logout().then()
  }
  const { data: server = [], } = useQuery({
    queryKey: ['server', user.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/server?email=${user.email}`);
      return res.data;
    }
  })

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Helmet>
        <title>CircuitFlow | Dashboard</title>
      </Helmet>
      <div className="flex">
        {/* dashboard side bar */}
        <div className={`lg:w-64 lg:h-[100vh] h-[180vh] bg-rose-300 ${
          isSidebarOpen ? "block" : "hidden"
        } lg:block`}>
          <ul className=" p-4">
            {isManager ? <>

              {
                server?.map((item) => <img className="w-16 mx-auto my-4" key={item._id} src={item.image}></img>)
              }
              <li>
                <NavLink to="/dashboard"
                 className={`flex items-center ${location.pathname === "/dashboard" ? "text-blue-500 underline" : "text-white"}`}>
                <div className="flex mb-2">
                <FaHome className="mt-2"></FaHome>
               <span className="lg:text-xl text-sm lg:mt-0 mt-2">UserHome</span>
                </div>
                  </NavLink>
              </li>
    
              <li>
              <NavLink
            to="/dashboard/allProduct"
            className={`flex items-center ${location.pathname === "/dashboard/allProduct" ? "text-blue-500 underline" : "text-white"}`}
          >
               <div className="flex mb-2">
               <FaShoppingCart className="mt-2" />
              <span className="lg:text-lg text-xs lg:mt-0 mt-2"> Product collection</span>
               </div>
                  </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/checkOut"
                 className={`flex items-center ${location.pathname === "/dashboard/checkout" ? "text-blue-500 underline" : "text-white"}`}
                >
                <div className="flex">
                <FaClipboardCheck className="text-lg mt-2 mb-2" />
             <span className="lg:text-xl text-sm lg:mt-0 mt-2">
             check out
             </span>
                </div>
                 </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/subscription"
                 className={`flex items-center ${location.pathname === "/dashboard/subscription" ? "text-blue-500 underline" : "text-white"}`}
                >
                <div className="flex mb-2">
                <MdOutlinePayment className="text-2xl mt-1" />
              <span className="lg:text-xl text-sm lg:mt-0 mt-2">
              Subscription & payment
              </span>
                </div>
                  </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/sales" 
                 className={`flex items-center ${location.pathname === "/dashboard/sales" ? "text-blue-500 underline" : "text-white"}`}
                >
                 <div className="flex">
                 <FcSalesPerformance className="mt-1" />
                 <span className="lg:text-xl text-sm lg:mt-0 mt-2"> Sales collection</span>
                 </div>
                 </NavLink>
              </li>

            </> :


              ''

            }
            {/* shared nav links */}
            <div className="divider"></div>
            <li>
              <NavLink to="/"
              className={`flex items-center ${location.pathname === "/" ? "text-blue-500 underline" : "text-white"}`}
              
              >
                <div className="flex mb-2">
                <FaHome className="mt-1"></FaHome>
                Home
                </div>
                </NavLink>
            </li>
            <li onClick={handleLogOut}>
              <NavLink to="/" className="text-white">
              <div className="flex">
              <CiLogout className="mt-1" />
              LogOut
              </div>
              </NavLink>
            </li>

          </ul>
        </div>
 {/* Mobile sidebar toggle button */}
<div className="relative">
<button
  className="md:hidden block absolute top-4 bg-rose-300 p-2 rounded-full z-50"
  onClick={handleSidebarToggle}
>
  {/* Ensure to use the correct icon visibility based on `isSidebarOpen` state */}
  {isSidebarOpen ? (
    <svg
      className="h-6 w-6 text-white"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L18 6M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      className="h-6 w-6 text-white"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )}
</button>
</div>

        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>

      </div>
      <div className="lg:mt-0">
        
      </div>
    </div>
  );
};

export default DashBoard;