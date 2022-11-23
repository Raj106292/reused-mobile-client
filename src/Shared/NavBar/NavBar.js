import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const menuList = <>
        <li className='lg:px-3'>Home</li>
        <li className='lg:px-3'>Categories</li>
        <li className='lg:px-3'>Sign In</li>
        <li className='lg:px-3'>Sign Out</li>
    </>

    const handleToast = () => {
        toast.success('heading to the Blog section', {duration: 3000});
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuList}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">RD's Mobile Island</Link>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal font-semibold">
                            {menuList}
                        </ul>
                    </div>
                    <a href='/blogs' onClick={handleToast} className="btn btn-sm btn-ghost lg:px-3">Blogs</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;