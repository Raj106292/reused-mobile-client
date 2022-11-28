import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../Common/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({ booking, setBooking }) => {

    const { user } = useContext(AuthContext);
    const [bmLoading, setBmLoading] = useState(false);

    const handleBooking = e => {
        e.preventDefault();
        setBmLoading(true);

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const product = form.product.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const image = booking.image;

        const bookingData = {
            name,
            email,
            sellerEmail: booking.sellerEmail,
            product,
            phone,
            location,
            image,
            price,
            paid: false
        }

        fetch(`${process.env.REACT_APP_server}/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('your booking is confirmed', { duration: 3000 });
                    setBmLoading(false);
                    setBooking(null);
                }
            })
            .catch(error => {
                toast.error(error.message, { duration: 3000 })
                setBmLoading('false');
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center text-blue-600">Booking Form</h3>
                    <form className='mt-5 space-y-3' onSubmit={handleBooking}>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                name='name'
                                placeholder="your name"
                                defaultValue={user?.displayName}
                                disabled
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="email"
                                name='email'
                                placeholder="your email"
                                defaultValue={user?.email}
                                disabled
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                name='product'
                                placeholder="product"
                                defaultValue={booking?.model}
                                disabled
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                name='price'
                                placeholder="price"
                                defaultValue={booking?.resalePrice}
                                disabled
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone:</span>
                            </label>
                            <input
                                type="text"
                                name='phone'
                                placeholder="phone number"
                                required
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Meeting Place:</span>
                            </label>
                            <input
                                type="text"
                                name='location'
                                placeholder="where you want to meet?"
                                required
                                className="input input-bordered w-full"
                            />
                        </div>
                        <button className="btn btn-info btn-outline w-full">
                            {
                                bmLoading ? <Loader /> :
                                    <input
                                        type="submit"
                                        required
                                    />
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;