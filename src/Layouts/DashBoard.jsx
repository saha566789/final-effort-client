import { NavLink, Outlet } from "react-router-dom";
import {  FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import useAuth from "../Hooks/useAuth";
import Footer from "../Pages/Shared/Footer/Footer";


const DashBoard = () => {
    const {logout} = useAuth()
    const handleLogOut = () =>{
        logout().then()
      }
    return (
      <div>
          <div className="flex">
             {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-rose-300">
            <ul className="menu p-4">
            <li>
                                <NavLink to="/dashboard">
                                    <FaHome></FaHome>
                                    UserHome</NavLink>
                            </li>
            <li>
                                <NavLink to="/dashboard/menu">
                                  <FaSearch></FaSearch>
                                    Menu's</NavLink>
                            </li>
            <li>
                                <NavLink to="/dashboard/allProduct">
                                <FaShoppingCart />
                                    All Product</NavLink>
                            </li>
                            
                
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