import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loader from '../../Common/Loader';
import { AuthContext } from '../../Contexts/AuthProvider';
import NavBar from '../../Shared/NavBar/NavBar';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext)
    const { data: allUsers = {}, isLoading } = useQuery({
        queryKey: ['allUsers', user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_server}/user?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <NavBar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 bg-base-100 text-base-content border-r-4 border-t-4">
                        {
                            allUsers?.status === 'user' &&
                            <li><Link to='/dashboard/my-order'>My Orders</Link></li>
                        }
                        {
                            allUsers?.status === 'admin' &&
                            <>
                                <li><Link to='/dashboard/all-seller'>All Seller</Link></li>
                                <li><Link to='/dashboard/all-buyer'>All Buyer</Link></li>
                            </>
                        }
                        {
                            allUsers?.status === 'seller' &&
                            <>
                                <li><Link to='/dashboard/my-products'>My Products</Link></li>
                                <li><Link to='/dashboard/add-product'>Add Product</Link></li>
                                <li><Link to='/dashboard/my-buyers'>My Buyers</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;