import React from 'react';
import Testimonials from './Testimonials';

const Testimonial = () => {
    return (
        <div>
            <div className='proudcts-captions w-1/2 text-center mx-auto pt-32 pb-10'>
                <h4 className='text-xl font-bold text-orange-500'>Testimonial</h4>
                <h2 className='text-5xl font-bold my-4'>What Customers Says</h2>
                <p>The majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which don't look even slighhly Beliebled</p>
            </div>
            <div>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Testimonial;