import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AllUser = () => {

    const { user } = useContext(AuthContext);
    const { data: allBuyer = [], refetch } = useQuery({
        queryKey: ['allBuyer', user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_server}/buyer/${user?.email}`, {
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
                hello {user?.displayName} sir, you can check all buyers here
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
                            allBuyer.map((buyer, i) => <tr key={buyer._id} className="hover">
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={buyer?.photo} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{buyer?.name}</td>
                                <td>{buyer?.email}</td>
                                <td>
                                    <button onClick={() => handleRemove(buyer._id)} className='btn btn-xs btn-secondary'>remove</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;