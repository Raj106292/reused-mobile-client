import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Common/Loader';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <Loader></Loader>
    }

    if (!user) {
        return <Navigate to='/log-in' state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;