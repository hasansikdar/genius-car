import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import SingleTestimonial from './SingleTestimonial';

const Testimonials = () => {
    return (
        <div className="carousel w-full">
            <div id="testimonial1" className="carousel-item relative w-full">
                <div className='flex px-10 gap-10 w-70 mx-auto'>
                    <SingleTestimonial></SingleTestimonial>
                    <SingleTestimonial></SingleTestimonial>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#testimonial4" className="btn btn-circle">❮</a>
                    <a href="#testimonial2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="testimonial2" className="carousel-item relative w-full">
                <div className='flex px-10 gap-10 w-70 mx-auto'>
                    <SingleTestimonial></SingleTestimonial>
                    <SingleTestimonial></SingleTestimonial>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#testimonial1" className="btn btn-circle">❮</a>
                    <a href="#testimonial3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="testimonial3" className="carousel-item relative w-full">
                <div className='flex px-10 gap-10 w-70 mx-auto'>
                    <SingleTestimonial></SingleTestimonial>
                    <SingleTestimonial></SingleTestimonial>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#testimonial2" className="btn btn-circle">❮</a>
                    <a href="#testimonial4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="testimonial4" className="carousel-item relative w-full">
                <div className='flex px-10 gap-10 w-70 mx-auto'>
                    <SingleTestimonial></SingleTestimonial>
                    <SingleTestimonial></SingleTestimonial>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#testimonial3" className="btn btn-circle">❮</a>
                    <a href="#testimonial1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;