import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { IoIosLogOut } from "react-icons/io";
import logoPic from "../../../assets/inventory-management-4.png"
const Navbar = () => {
    const { user, logout } = useAuth()
  const handleLogOut = () =>{
    logout().then()
  }
    const navOptions = <>
     <li className="text-red-700 text-xl font-semibold"><Link to="/">Home</Link></li>
     <li className="text-red-700 text-xl font-semibold"><Link to="/createShop">Create Shop</Link></li>
     <li className="text-red-700 text-xl font-semibold"><Link to="/register">Register</Link></li>
    
     {user?.email ?<div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <button className="btn btn-ghost">{user.displayName}</button>
              </li>

              <li><button onClick={handleLogOut} className="btn btn-ghost">Logout <IoIosLogOut /></button></li>
              
            </ul>
            </div>
            :
            <li className="text-red-700 text-xl font-semibold"><Link to="/login">Login</Link></li>
        
          }

   
    </>
    return (
        <div className="navbar bg-red-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <img className="w-10" src={logoPic} alt="" />
    <a className="text-black text-2xl">Circuit<span   className="text-red-700 font-bold">Flow</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn text-red-700 text-lg">Watch Demo</a>
  </div>
</div>
    );
};

export default Navbar;