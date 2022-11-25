import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Common/Loader';
import img1 from '../../assets/banner_3.jpg';

const Categories = () => {

    const { data: brands = [], isLoading } = useQuery({
        queryKey: ['brands'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_server}/category`);
            const data = await res.json();

            return data;
        }
    })

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-lg" alt='' />
                    <div className="absolute transform -translate-y-1/2 right-32 top-1/2">
                        <h3 className='text-3xl font-bold text-black'> --[available brand's mobile]-- </h3>
                    </div>
                </div>
            </div>
            {brands?.length}
        </div>
    );
};

export default Categories;