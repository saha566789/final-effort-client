import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { IoIosLogOut } from 'react-icons/io';
import logoPic from '../../../assets/inventory-management-4.png';
import useManager from "../../../Hooks/useManger"
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    const { user, logout } = useAuth();
    const isManager = useManager();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogOut = () => {
        logout().then();
      
    };


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const navOptions = (
        <>
            <li className="text-red-700 text-xl font-semibold">
                <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="text-red-700 text-xl font-semibold">
                <Link to="/createShop" onClick={closeMenu}>Create Shop</Link>
            </li>
            <li className="text-red-700 text-xl font-semibold">
                <Link to="/aboutUs" onClick={closeMenu}>About us</Link>
            </li>

        </>
    );

    return (
        <div className="navbar bg-white fixed z-30 lg:w-[70%] lg:ml-48 lg:mt-2 mt-0  lg:rounded-full">
            <div className="navbar-start lg:ml-4">
                {/* Mobile Menu Toggle */}
                <div className="dropdown relative lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    {menuOpen && (
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    )}
                </div>
                <img className="w-10 hidden lg:flex" src={logoPic} alt="" />
                <a className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text text-2xl font-bold">CircuitFlow</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end lg:mr-11">
                {user?.email ? (
                    <>
                        <div className="dropdown dropdown-end">

                            <div className="dropdown relative">
                                <label tabIndex={0} className="text-5xl" onClick={toggleMenu}>

                                    <CgProfile></CgProfile>
                                </label>
                                {menuOpen && (
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
                                     <li>   <p className="lg:text-lg text-red-700 text-xs font-semibold">{user.displayName}</p></li>
                                        {user && isManager && (
                                            <li>
                                              <p  className="text-red-700 text-sm lg:text-xl font-semibold">
                                              <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
                                                </p> 
                                            </li>
                                        )}
                                   <li>     <button onClick={handleLogOut} className="text-red-700 flex font-semibold text-sm lg:text-xl">Logout<IoIosLogOut className="mt-1" /></button></li>
                                    </ul>
                                )}
                            </div>





                            {/* <div className="flex items-center flex-wrap">
                                <p className="lg:text-xl text-red-700 text-xs">{user.displayName}</p>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full flex">
                                        <img src={user.photoURL} alt={user.displayName} />
                                    </div>
                                </label>
                                <button onClick={handleLogOut} className="text-red-700 flex font-semibold text-xl">Logout<IoIosLogOut className="mt-1" /></button>
                            </div> */}

                        </div>
                    </>
                ) : (
                    <Link to="/login">

                        <button className='border-2 lg:w-32 lg:h-10 w-24 text-red-700 text-lg lg:text-xl font-semibold border-black hover:bg-red-200'>Login</button>

                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
