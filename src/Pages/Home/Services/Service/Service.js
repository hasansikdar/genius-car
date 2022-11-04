import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {price,_id, title, img} = service;
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="px-5 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <h3 className='font-bold text-xl text-orange-500'>Price: ${price}</h3>
                <div className="card-actions">
                    <Link to={`/services/${_id}`}><button className="btn btn-primary rounded">Purches</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;