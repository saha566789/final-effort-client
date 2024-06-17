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


const DashBoard = () => {
  const axiosPublic = useAxiosPublic()
  const { user, logout } = useAuth()
  const isManager = useManger()
  const location = useLocation()
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
  return (
    <div>
      <Helmet>
        <title>CircuitFlow | Dashboard</title>
      </Helmet>
      <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-rose-300">
          <ul className=" p-4">
            {isManager ? <>

              {
                server?.map((item) => <img className="w-16 mx-auto my-4" key={item._id} src={item.image}></img>)
              }
              <li>
                <NavLink to="/dashboard"
                 className={`flex items-center ${location.pathname === "/dashboard" ? "text-blue-500 underline" : "text-white"}`}>
                <div className="flex mb-2">
                <FaHome className="mt-1"></FaHome>
                UserHome
                </div>
                  </NavLink>
              </li>
    
              <li>
              <NavLink
            to="/dashboard/allProduct"
            className={`flex items-center ${location.pathname === "/dashboard/allProduct" ? "text-blue-500 underline" : "text-white"}`}
          >
               <div className="flex mb-2">
               <FaShoppingCart className="mt-1" />
               Product collection
               </div>
                  </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/checkOut"
                 className={`flex items-center ${location.pathname === "/dashboard/checkout" ? "text-blue-500 underline" : "text-white"}`}
                >
                <div className="flex">
                <FaClipboardCheck className="mt-1 mb-2" />
                check out
                </div>
                 </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/subscription"
                 className={`flex items-center ${location.pathname === "/dashboard/subscription" ? "text-blue-500 underline" : "text-white"}`}
                >
                <div className="flex mb-2">
                <MdOutlinePayment className="mt-1" />
                Subscription & payment
                </div>
                  </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/sales" 
                 className={`flex items-center ${location.pathname === "/dashboard/sales" ? "text-blue-500 underline" : "text-white"}`}
                >
                 <div className="flex">
                 <FcSalesPerformance className="mt-1" />
                  Sales collection
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

        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>

      </div>
      <div className="mt-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DashBoard;