import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Footer from '../../../Shared/Footer/Footer';
import BookingModal from '../BookingModal/BookingModal';
import Product from '../Product/Product';

const Products = () => {

    const [booking, setBooking] = useState(null);
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
                    products?.map((prd, i) => <Product key={i} prd={prd} setBooking={setBooking}></Product>)
                }
            </div>
            {
                booking && <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                ></BookingModal>
            }
            <Footer></Footer>
        </div>
    );
};

export default Products;