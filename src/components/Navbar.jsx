import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import Logo from "../assets/Eco-Logo.png"


const Navbar = () => {


    const { user, setUser, logOut } = useContext(AuthContext);

    const links = (
        <>
            <div data-aos="slide-right" className="flex gap-2">
                <NavLink to="/"><li className="p-2 font-semibold">Home</li></NavLink>
                <NavLink to="/updateprofile"><button className="p-2 font-semibold">Update Profile</button></NavLink>
                <NavLink to="/userprofile"><li className="p-2 font-semibold">My Profile</li></NavLink>
            </div>
        </>
    )
    return (
        <div className="mx-auto pb-8">
            <div className="navbar bg-red-100 bg-b px-6 py-1">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div data-aos="fade-down" className="h-full w-full">
                        <img className="md:h-24 md:w-24 h-16 w-16" src={Logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className=" flex gap-4 justify-center items-center">
                        <div className="tooltip tooltip-bottom text-3xl" data-tip={user?.displayName}>
                            {
                                !user ? <FaUserCircle /> : <img className="md:h-16 md:w-16 h-12 w-12 rounded-full" src={user.photoURL}/>
                            }
                        </div>
                        <div>
                            {
                                user ? <Link to="/"><button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-1 px-3 md:py-3 md:px-6 rounded-lg shadow-lg hover:from-purple-500 hover:to-blue-500 hover:scale-105 transition duration-300" onClick={logOut}>Log Out</button></Link> : <Link to="/login"><button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-1 px-3 md:py-3 md:px-6 rounded-lg shadow-lg hover:from-purple-500 hover:to-blue-500 hover:scale-105 transition duration-300">Login</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;