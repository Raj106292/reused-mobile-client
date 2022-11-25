import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Common/Loader';

const Categories = () => {

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_server}/category`);
            const data = await res.json();

            return data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='mt-14 md:mt-10'>
            <h2
                className='text-3xl mx-auto font-semibold text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'
            >
                <span className='border-b-2 border-dashed border-purple-600'>mobile of the brands you found here</span>
            </h2>
            <div className='flex flex-wrap justify-center gap-10'>
                {
                    categories.slice(0, 3)?.map(category => <div key={category._id} className="card card-compact w-96 bg-base-100 shadow-xl mt-10">
                        <figure><img src={category?.brandLogo} className='w-full' style={{height: '200px'}} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{category?.brand}</h2>
                            <p>product quality is our first choice</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">products</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;