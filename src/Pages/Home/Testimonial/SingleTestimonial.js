import React from 'react';
import quote from '../../../assets/icons/quote.svg';
const SingleTestimonial = () => {
    return (
        <div>
            <div className='testimonial border p-5'>
                <div className="author flex items-center justify-between gap-5">
                    <img className='w-10' src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80" alt="" />
                    <div className='author-name'>
                        <h3 className='text-2xl'>Awlad Hossain</h3>
                        <h4 className='text-xl'>BusinessMen</h4>
                    </div>
                    <img className='w-14' src={quote} alt="" />
                </div>
                <p className='py-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non commodi, natus mollitia nostrum autem sapiente, voluptatibus, ipsum aliquid accusantium sint repudiandae blanditiis ex sit excepturi praesentium quas illo esse voluptate et temporibus! Dolorem ducimus maxime atque dignissimos incidunt laboriosam animi?
                </p>
                <div className="rating ">
                    <input type="radio " name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" checked />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonial;