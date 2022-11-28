import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../../../Common/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider';
import OrderData from './OrderData';

const MyOrders = () => {

    const { user, loading } = useContext(AuthContext);

    const { data: bookingsData = [], isLoading, refetch } = useQuery({
        queryKey: ['bookingsData', user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_server}/bookings?email=${user?.email}`, {
                headers: {
                    'authorization': `bearer ${localStorage.getItem('rmiToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    if (loading) {
        return <Loader />
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className='mt-8 ml-12'>
            {
                bookingsData?.length > 0 && <h2
                    className='text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-300'
                >
                    hello {user?.displayName}, it's your orders list
                </h2>
            }
            <div>
                {
                    bookingsData?.length > 0 ?
                        <div className="overflow-x-auto w-full mt-10">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Image</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Payment</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bookingsData.map((bookingData, i) => <OrderData
                                            key={bookingData._id}
                                            i={i}
                                            bookingData={bookingData}
                                            refetch={refetch}
                                        ></OrderData>)
                                    }
                                </tbody>
                            </table>
                        </div> :
                        <div className='text-center text-2xl font-bold text-red-500'>
                            <p>you have no bookings yet</p>
                        </div>
                }
            </div>
        </div>
    );
};

export default MyOrders;