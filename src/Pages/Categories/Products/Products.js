import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Footer from '../../../Shared/Footer/Footer';

const Products = () => {

    const { user } = useContext(AuthContext);
    const brandData = useLoaderData();
    const products = brandData.product;
    // console.log(products);


    return (
        <div className='bg-gradient-to-l from-slate-200 to-white'>
            <h2 className='text-center bg-gradient-to-r from-slate-400 to-white p-5 rounded-lg shadow-xl'>
                {
                    user?.email ?
                        <>
                            <span className='text-2xl font-semibold text-sky-500'>Hello, {user?.displayName}</span> <br />
                            <span className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500'>welcome to the {brandData?.brand}'s products page</span>
                        </> :
                        <h2 className='text-xl'>
                            please
                            <Link to='/log-in' className='font-bold'> login </Link>
                            or
                            <Link to='/sign-up' className='font-bold'> signup </Link>
                            to buy your product
                        </h2>
                }
            </h2>
            <div className='mt-10'>
                <h2 className='text-2xl font-semibold text-orange-500 text-center'>
                    <span className='mx-auto border-b-4 border-cyan-400 flex justify-center items-center w-[420px] gap-4'>
                        <p className='w-4 h-4 border-2 border-dashed border-blue-600 animate-spin'></p>
                        <p>Available Secondhand Mobile</p>
                        <p className='w-4 h-4 border-2 border-dashed border-blue-600 animate-spin'></p>
                    </span>
                </h2>
            </div>
            <div className='mt-10 flex flex-wrap justify-center gap-12'>
                {
                    products?.map((prd, i) => <div key={i} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={prd?.image} className='w-full' style={{ height: '250px' }} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{prd?.model}</h2>
                            <p>{prd?.description}</p>
                            <div className='flex justify-start items-center'>
                                <p className='font-bold'>Seller:
                                    <span className='text-blue-500'> {prd?.sellerName}</span>
                                </p>
                                <p className='ml-[-160px]'>
                                    {
                                        prd?.sellerStatus === 'verified' &&
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>
                                    }
                                </p>
                            </div>
                            <p className='font-bold'>Location: <span className='text-blue-500'>{prd?.sellerLocation}</span></p>
                            <p className='font-bold'>Years of use: <span className='text-blue-500'>{prd?.yearsOfUse}</span></p>
                            <p className='font-bold'>Date of Post: <span className='text-blue-500'>{prd?.date}</span></p>
                            <p className='font-bold'>Resale Price: BDT- <span className='text-blue-500'>{prd?.resalePrice}</span></p>
                            <p className='font-bold'>Original Price: BDT- <span className='text-blue-500'>{prd?.originalPrice}</span></p>
                            <div className="card-actions justify-between items-center">
                                <button className='btn btn-outline btn-warning'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </button>
                                <button className="btn btn-primary" disabled={!user?.email && true} >Book Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Products;