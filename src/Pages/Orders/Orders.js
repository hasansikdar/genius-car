import React, { useContext, useEffect, useState } from 'react';
import { AuthContextProvider } from '../../Authcontext/AuthContext';
import OrdersRow from './OrdersRow';

const Orders = () => {
    const { user } = useContext(AuthContextProvider);
    const [orders, setOrders] = useState([]);      
    const url = `https://genius-car-server-virid.vercel.apporders?email=${user?.email}`



    const handleDelete = id => {
        const agree = window.confirm('Are you Sure You want to Delete ?');
        if(agree){
            fetch(`https://genius-car-server-virid.vercel.apporders/${id}`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Delete Successful');
                    const remainingOrders = orders.filter(ord => ord._id !== id);
                    setOrders(remainingOrders);
                }
            })
        }
    }
    const handleUpdateStatus = id =>{
        fetch(`https://genius-car-server-virid.vercel.apporders/${id}`,{
            method: "PATCH",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({status:'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                const remainningOrders = orders.filter(ord => ord._id !== id);
                const approving = orders.find(ord => ord._id === id);
                approving.status = 'Approved';
                const newOrders = [approving, ...remainningOrders];
                setOrders(newOrders);
            }
        })
    }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    return (
        <div className="overflow-x-auto w-full py-10">
            <h1 className='py-10 text-center text-5xl font-bold'>Total Orders: {orders.length}</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Mobile Number</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrdersRow
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleUpdateStatus={handleUpdateStatus}
                        ></OrdersRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Orders;