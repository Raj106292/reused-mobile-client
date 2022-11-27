import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Common/Loader';
import useSeller from '../Common/useSeller';
import { AuthContext } from '../Contexts/AuthProvider';

const SellerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, sellerLoader] = useSeller(user?.email);
    const location = useLocation();

    if (loading || sellerLoader) {
        return <Loader />
    }

    if (user && isSeller) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default SellerRoute;