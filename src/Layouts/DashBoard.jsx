import { NavLink, Outlet } from "react-router-dom";
import { FaClipboardCheck, FaHome, FaShoppingCart, FaUsers } from "react-icons/fa";
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
          <ul className="menu p-4">
            {isManager ? <>

              {
                server?.map((item) => <img className="w-16 mx-auto my-4" key={item._id} src={item.image}></img>)
              }
              <li>
                <NavLink to="/dashboard">
                  <FaHome></FaHome>
                  UserHome</NavLink>
              </li>



              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allProduct">
                  <FaShoppingCart />
                  Product collection</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/checkOut">
                  <FaClipboardCheck />
                  check out</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/subscription">
                  <MdOutlinePayment />
                  Subscription & payment</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/sales">
                  <FcSalesPerformance />
                  Sales collection</NavLink>
              </li>

            </> :


              ''

            }
            {/* shared nav links */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                Home</NavLink>
            </li>
            <li onClick={handleLogOut}>
              <NavLink to="/">
                <CiLogout />
                LogOut</NavLink>
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