import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Common/Loader';
import img1 from '../../assets/banner_3.jpg';
import { Link } from 'react-router-dom';

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
            <div className='mt-12 flex flex-wrap justify-center gap-12'>
                {
                    brands?.map(brand => <div key={brand._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={brand.brandLogo} className='w-full' style={{ height: '200px' }} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{brand.brand}</h2>
                            <p>check product quality is our first responsibility</p>
                            <div className="card-actions justify-end">
                                <Link to={`/brand/${brand.categoryId}`}><button className="btn btn-primary">products</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;