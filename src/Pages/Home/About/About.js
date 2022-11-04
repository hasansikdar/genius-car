import React from 'react';
import image1 from  '../../../assets/images/about_us/parts.jpg';
import image2 from  '../../../assets/images/about_us/person.jpg';
const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='about-images w-1/2 relative h-full'>
                    <img src={image2} className="max-w-sm rounded-lg shadow-2xl w-full h-100" />
                    <img src={image1} className="max-w-sm rounded-lg shadow-2xl absolute right-20 top-40 w-1/2" />
                </div>
                <div className='w-1/2'>
                    <h4 className='text-xl text-orange-500 font-bold'>About</h4>
                    <h1 className="text-5xl font-bold">We are qualified & of experience of in this field.</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-error rounded ">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;