import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

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
                            <p className='font-bold'>Price: BDT-<span className='text-blue-500'>{prd?.price}</span></p>
                            <div className="card-actions justify-between items-center">
                                <button className='btn btn-outline btn-warning'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </button>
                                <button className="btn btn-primary" disabled={!user?.email && true} >Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;