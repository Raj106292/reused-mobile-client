import React from 'react';
import img1 from '../../../assets/download.jpeg';

const Featured = () => {
    return (
        <div className='mt-10'>
            <h3 className='text-3xl font-semibold text-success text-center p-5'>
                <span className='border-b-2 border-dashed border-green-500'>most selling mobile of this month</span>
            </h3>
            <div className="hero border-2 shadow-xl rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img1} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Redmi 11i HyperCharge</h1>
                        <p className="py-6">Xiaomi Mi 11i gets launched as the rebranded version of Redmi K40 Pro+. The flagship device assures a great user experience overall, with its robust camera configuration, compact processor setup and powerful battery. For music lovers, Xiaomi has incorporated high-resolution Dolby Atmos audio speakers. </p>
                        <a href='https://www.mi.com/in/product/xiaomi-11i-5g/' target='blank' className="link link-hover text-info font-semibold">want to know more about this set?</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;