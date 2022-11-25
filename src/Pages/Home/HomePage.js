import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Featured from './Featured/Featured';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Featured></Featured>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;