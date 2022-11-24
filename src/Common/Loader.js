import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center'>
            <p className='w-6 h-6 rounded-full border-dashed border-2 border-sky-500 animate-spin'> </p>
        </div>
    );
};

export default Loader;