import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Common/Loader';
import useAdmin from '../Common/useAdmin';
import { AuthContext } from '../Contexts/AuthProvider';

const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const [isAdmin, adminLoader] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || adminLoader) {
        return <Loader />
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/log-in' state={{ from: location }} replace />;
};

export default AdminRoute;