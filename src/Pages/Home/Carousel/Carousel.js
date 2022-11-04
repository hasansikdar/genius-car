import React, { useEffect, useState } from 'react';
import './Carousel.css';
import CarouselItem from './CarouselItem';


const Carousel = () => {
    const [carousels, setCarousels] = useState([]);

    useEffect(() => {
        fetch('CarouselInfo.json')
        .then(res => res.json())
        .then(data => setCarousels(data))
    },[])
    return (
        <div className="carousel h-5/6 w-full">
            {
                carousels.map(carousel => <CarouselItem
                  key={carousel.id}
                  carousel={carousel}
                  >
                </CarouselItem>)
            }
        </div>
    );
};

export default Carousel;