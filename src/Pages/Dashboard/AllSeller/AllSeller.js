import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AllSeller = () => {

    const { user } = useContext(AuthContext);
    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['allSellers', user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_server}/seller/${user?.email}`, {
                headers: {
                    'authorization': `bearer ${localStorage.getItem('rmiToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleRemove = id => {
        const proceed = window.confirm('Are you sure to remove the user?');
        if(proceed){
            fetch(`${process.env.REACT_APP_server}/buyer/${id}`, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('user removed successfully');
                    refetch();
                }
            })
        }
    }

    return (
        <div className='mt-10'>
            <h2 className='text-center text-3xl font-semibold text-blue-600'>
                hello {user?.displayName} sir, you can check all sellers here
            </h2>
            <div className="overflow-x-auto mt-5 ml-5 mr-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers.map((seller, i) => <tr key={seller._id} className="hover">
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={seller?.photo} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{seller?.name}</td>
                                <td>{seller?.email}</td>
                                <td>
                                    <button onClick={() => handleRemove(seller._id)} className='btn btn-xs btn-secondary'>remove</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;