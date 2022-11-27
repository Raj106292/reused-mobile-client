import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext);
    const { data: allProducts = [] } = useQuery({
        queryKey: ['allProducts', user.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_server}/products/${user.email}`, {
                headers: {
                    'authorization': `bearer ${localStorage.getItem('rmiToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleStatus = (name) => {
        fetch(`${process.env.REACT_APP_server}/products`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({name})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }


    return (
        <div className='mt-10 ml-5 mr-5'>
            <h2 className='text-center text-3xl font-semibold text-blue-600'>
                hello seller, you can check your products here
            </h2>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProducts.map((product, i) => <tr key={i} className="hover">
                                <th>{i+1}</th>
                                <td>{product?.model}</td>
                                <td>{product?.resalePrice}</td>
                                <td><button onClick={() => handleStatus(product?.model)} className='btn btn-xs btn-ghost'>{product?.status}</button></td>
                                <td><button className='btn btn-xs btn-secondary'>apply</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;