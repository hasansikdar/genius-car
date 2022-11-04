import React from 'react';

const Product = ({ product }) => {
    const { name, price, rating, id, img } = product;

    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="px-5 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <h4 className='text-lg font-bold text-orange-500'>Price: ${price}</h4>
                <div className="card-actions">
                    <button className="btn btn-primary rounded">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;