import React, { useEffect, useState } from 'react';

const OrdersRow = ({order, handleDelete, handleUpdateStatus}) => {
    const {serviceName, serviceId, _id, price, phone, status} = order;
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch(`https://genius-car-server-virid.vercel.app/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() =>handleDelete(_id)} className='btn btn-error rounded btn-sm'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-20 h-20">
                            <img className='w-full' src={services?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {phone}
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>{price}</td>
            <th>
                <button onClick={() => handleUpdateStatus(_id)} className="btn btn-ghost btn-xs">{status ? status: "Pending"}</button>
            </th>
        </tr>
    );
};

export default OrdersRow;