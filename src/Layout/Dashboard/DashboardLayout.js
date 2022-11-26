import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';

const DashboardLayout = () => {
    return (
        <div>
            <NavBar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 bg-base-100 text-base-content border-r-4 border-t-4">
                        <li><a href='/'>My Orders</a></li>
                        <li><a href='/'>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;