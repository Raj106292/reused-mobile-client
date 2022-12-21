import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Welcome = () => {

    useTitle('Dashboard');

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <h2 className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400'>welcome to dashboard section</h2>
        </div>
    );
};

export default Welcome;