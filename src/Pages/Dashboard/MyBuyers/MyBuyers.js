import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyBuyers = () => {

    const {user} = useContext(AuthContext);
    const {data: buyers = [] } = useQuery({
        queryKey: ['buyers', user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_server}/myBuyer?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='mt-10 ml-5 mr-5'>
            hello
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id} className="active">
                            <th>{i + 1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.location}</td>
                            <td>{buyer.phone}</td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBuyers;