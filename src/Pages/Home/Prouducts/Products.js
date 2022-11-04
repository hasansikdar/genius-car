import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://genius-car-server-virid.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                if (data.length > 6) {
                    const newData = data.slice(0, 6);
                    setProducts(newData)
                }
                else {
                    setProducts(data)
                }
            })
    }, [])
    return (
        <div>
            <div className='proudcts-captions w-1/2 text-center mx-auto'>
                <h4 className='text-xl font-bold text-orange-500'>Popular Products</h4>
                <h2 className='text-5xl font-bold my-4'>Browse Our Products</h2>
                <p>The majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which don't look even slighhly Beliebled</p>
            </div>
            <div className='all-proudcts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='more-products text-center'>
                <button className="btn btn-error rounded">More Products</button>
            </div>
        </div>
    );
};

export default Products;