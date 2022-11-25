import React from 'react';
import Loader from '../../Common/Loader';
import Banner from './Banner/Banner';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Loader></Loader>
        </div>
    );
};

export default HomePage;