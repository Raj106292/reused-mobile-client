import React from 'react';
import img1 from '../../../assets/banner_1.webp';
import img2 from '../../../assets/banner_2.jpg';
import img3 from '../../../assets/banner_3.jpg';
import img4 from '../../../assets/banner_4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[400px] shadow-xl rounded-md">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img2} className="w-full" style={{opacity: '.7'}} alt='' />
                <div className="absolute transform -translate-y-1/2 right-12 top-8">
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600'>RD's Mobile Island</h3>
                </div>
                <div className="absolute transform -translate-y-1/2 left-32 top-1/2">
                    <h3 className='text-3xl font-bold text-black'>you will find the best <br /> secondhand mobile</h3>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle btn-ghost">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-ghost">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img1} className="w-full" alt='' />
                <div className="absolute transform -translate-y-1/2 right-12 top-5">
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>RD's Mobile Island</h3>
                </div>
                <div className="absolute transform -translate-y-1/2 left-12 top-80">
                    <h3 className='text-3xl font-bold text-blue-500 bg-white px-2'>make your online payment safer</h3>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle btn-ghost">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-ghost">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" alt='' />
                <div className="absolute transform -translate-y-1/2 left-12 top-5">
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-pink-600'>RD's Mobile Island</h3>
                </div>
                <div className="absolute transform -translate-y-1/2 right-32 top-1/2">
                    <h3 className='text-3xl font-bold text-black'>select your favorite one <br />in your budget</h3>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle btn-ghost">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-ghost">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" alt='' />
                <div className="absolute transform -translate-y-1/2 left-12 top-5">
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>RD's Mobile Island</h3>
                </div>
                <div className="absolute transform -translate-y-1/2 right-28 top-1/2">
                    <h3 className='text-3xl font-bold text-black'>make your payment system <br />easy and safer</h3>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle btn-ghost">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-ghost">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;