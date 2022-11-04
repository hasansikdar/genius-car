import React from 'react';
import Header from '../Share/Header/Header';
import error from '../../assets/images/ErrorPage/Frame.png';

const Error404 = () => {
    return (
        <div>
            <Header></Header>
            <div className='error-page text-center mx-auto'>
                <img className='mx-auto' src={error} alt="" />
            </div>
        </div>
    );
};

export default Error404;