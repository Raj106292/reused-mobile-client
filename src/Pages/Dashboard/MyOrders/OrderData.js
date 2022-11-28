import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const OrderData = ({ bookingData, i, refetch }) => {

    const handleDelete = () => {
        const proceed = window.confirm('Are you sure to remove the booking');
        if (proceed) {
            fetch(`${process.env.REACT_APP_server}/bookings/${bookingData._id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('booking removed successfully', { duration: 3000 });
                        refetch();
                    }
                })
        }
    }

    return (
        <tr key={i}>
            <th>
                {i + 1}
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={bookingData?.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                {bookingData?.product}
            </td>
            <td>
                {bookingData?.price}
            </td>
            <td>
                {
                    bookingData?.price && !bookingData?.paid && <Link to={`/dashboard/payment/${bookingData._id}`}>
                        <button className="btn btn-primary btn-xs">Pay</button>
                    </Link>
                }
                {
                    bookingData?.price && bookingData?.paid && <p className='text-cyan-600'>paid</p>
                }
            </td>
            <th>
                <button onClick={handleDelete} className="btn btn-error btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default OrderData;