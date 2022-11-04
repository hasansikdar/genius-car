import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContextProvider } from '../../Authcontext/AuthContext';

const Checkout = () => {
    const service = useLoaderData();
    const navigate = useNavigate();
    const { title, _id, price } = service;
    const { user } = useContext(AuthContextProvider);
    console.log(user);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
        const order = {
            serviceId: _id,
            name,
            email,
            phone,
            price,
            message,
            serviceName: title,
        }
        fetch('https://genius-car-server-virid.vercel.apporders', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Order Placed successful')
                form.reset();
                navigate('/orders');

            }
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">{title}</h1>
                </div>
                <div className="card  w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} action="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input defaultValue={user?.displayName} name='name' type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" name="phone" placeholder="Phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" defaultValue={user?.email} readOnly type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <textarea name='message' className='w-full p-4 border rounded' placeholder='Messege' required id="" cols="30" rows="5"></textarea>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Place Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;