import React from 'react';

const CarouselItem = ({ carousel }) => {
    const { img, title, id, prev, next, bannerDetails } = carousel;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <img src={img} className="w-full" />
            <div className="absolute flex w-1/2 justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
                <h1 className='text-5xl font-bold text-white'>{title}</h1>
            </div>
            <div className="absolute flex w-1/2 justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
                <p className='text-xl text-white'>{bannerDetails}</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-2/3">
                <button className="btn btn-secondary rounded mr-3">Discover More</button>
                <button className="btn btn-accent rounded">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-4">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default CarouselItem;