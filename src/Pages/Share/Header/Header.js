import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { FaSearch, FaShoppingBag, FaUserAlt } from "react-icons/fa";
import { AuthContextProvider } from '../../../Authcontext/AuthContext';

const Header = () => {
    const { user, logout } = useContext(AuthContextProvider);
    const navigate = useNavigate();

    const signout = () => {
        const agree = window.confirm("Are you Sure Log out ?");
        if (agree) {
            logout()
                .then(res => {
                    // logout
                    navigate('/login');
                })
                .then(error => console.log(error))
        }

    }

    return (
        <div className="navbar bg-base-100 w-90 items-center py-4 mt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/signup'>Signup</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className='w-20' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/orders'>Orders</Link></li>
                    {user?.email ?
                        <></>
                        :
                        <>
                            <li><Link to='/signup'>Signup</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </>
                    }
                </ul>
            </div>
            <div className='navbar-end headers-icons'>
                <FaSearch />
                <FaShoppingBag className='ml-4' />
            </div>
            <div className="navbar-end">
                <a className="btn rounded btn-outline btn-error">Appointment</a>
                {/* {user ?

                    <div className='profile ml-2 w-10 rounded-full cursor-pointer'>
                        <img className='rounded-full w-10 h-10' src={user?.photoURL} alt="" />
                    </div>
                    :
                    <div className='mx-4'>
                        <FaUserAlt></FaUserAlt>
                    </div>
                } */}

                {user ?
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/profile' className="justify-between">
                                    Profile
                                    <span className="badge">{user?.displayName}</span>
                                </Link>
                            </li>
                            <li><a>Settings</a></li>
                            {user?.email ?
                                <li><button onClick={signout}>logout</button></li>
                                :
                                <></>
                            }
                        </ul>
                    </div>
                    :
                    <div className='mx-4'>
                        <FaUserAlt></FaUserAlt>
                    </div>

                }
            </div>
        </div>
    );
};

export default Header;