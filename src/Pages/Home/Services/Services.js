import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://genius-car-server-virid.vercel.appservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="services-content text-center w-2/3 mx-auto">
                <h4 className='text-xl font-bold text-orange-500'>Service</h4>
                <h1 className='text-5xl font-bold mb-2'>Our Services Area</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex aliquid vitae nisi dignissimos mollitia, possimus temporibus praesentium? Officia, voluptatum?</p>
            </div>
            <div className='services-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='more-services text-center mt-10'>
                <button className="btn btn-error rounded">More Services</button>
            </div>
        </div>
    );
};

export default Services;