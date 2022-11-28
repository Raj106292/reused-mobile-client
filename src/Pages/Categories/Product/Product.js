import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Product = ({ prd, setBooking }) => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
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
                    <div className="card-actions justify-between">
                        <div>
                            {
                                prd?.status === 'available' && <button className='rounded px-4 py-2 bg-yellow-400' disabled={user?.email === prd.sellerEmail ? true : false}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </button>
                            }
                        </div>
                        <div>
                            {
                                prd.status === 'available' ?
                                    <label
                                        htmlFor="booking-modal"
                                        onClick={() => setBooking(prd)}
                                        className="btn btn-primary"
                                        disabled={user?.email === prd.sellerEmail ? true : false}
                                    >Book Now</label> :
                                    <span className='p-3 rounded bg-slate-400'>
                                        out of stock
                                    </span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;