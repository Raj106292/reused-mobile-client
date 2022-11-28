import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOut from './CheckOut';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {

    const bookingData = useLoaderData();

    return (
        <div className='mt-10 ml-5 space-y-3'>
            <h2 className='text-3xl'>You are going to make payment for {bookingData?.product}</h2>
            <p className='text-2xl text-green-600'>You have to pay total <strong>{bookingData?.price}</strong> BDT</p>
            <div className='my-12 w-96 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckOut bookingData={bookingData} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;