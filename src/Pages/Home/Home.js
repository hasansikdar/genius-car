import React from 'react';
import About from './About/About';
import Address from './Address/Address';
import Carousel from './Carousel/Carousel';
import Chooses from './Chooses/Chooses';
import Products from './Prouducts/Products';
import Services from './Services/Services';
import Teams from './Team/Teams';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <div className='header-banner'>
                <Carousel></Carousel>
                <About></About>
                <Services></Services>
                <Address></Address>
                <Products></Products>
                <Teams></Teams>
                <Chooses></Chooses>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;