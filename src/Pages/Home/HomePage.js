import React from 'react';
import Loader from '../../Common/Loader';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Loader></Loader>
        </div>
    );
};

export default HomePage;