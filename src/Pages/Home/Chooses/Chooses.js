import React from 'react';
import group from '../../../assets/icons/group.svg';
import delivery from '../../../assets/icons/deliveryt.svg';
import person from '../../../assets/icons/person.svg';
import wrance from '../../../assets/icons/Wrench.svg';
import check from '../../../assets/icons/check.svg';


const Chooses = () => {
    return (
        <div>
            <div className='proudcts-captions w-1/2 text-center mx-auto'>
                <h4 className='text-xl font-bold text-orange-500'>Core Features</h4>
                <h2 className='text-5xl font-bold my-4'>Why Choose us ?</h2>
                <p>The majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which don't look even slighhly Beliebled</p>
            </div>
            <div className='features grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-10'>
                <div className='feature border shadow text-center py-6 rounded'>
                    <img src={group} className='text-center mx-auto' alt="" />
                    <h4 className='text-xl mt-2 font-bold'>Expert Team</h4>
                </div>
                <div className='feature border shadow text-center py-6 bg-orange-500 rounded text-white'>
                    <img src={delivery} className='text-center mx-auto' alt="" />
                    <h4 className='text-xl mt-2 font-bold'>Timely Delivery</h4>
                </div>
                <div className='feature border shadow text-center py-6 rounded'>
                    <img src={person} className='text-center mx-auto' alt="" />
                    <h4 className='text-xl mt-2 font-bold'>24/7 Support</h4>
                </div>
                <div className='feature border shadow text-center py-6 rounded'>
                    <img src={wrance} className='text-center mx-auto' alt="" />
                    <h4 className='text-xl mt-2 font-bold'>Best Equipments</h4>
                </div>
                <div className='feature border shadow text-center py-6 rounded'>
                    <img src={check} className='text-center mx-auto' alt="" />
                    <h4 className='text-xl mt-2 font-bold'>100% Garanty</h4>
                </div>
                <div className='feature border shadow text-center py-6 rounded '>
                    <img src={delivery} className='text-center mx-auto' alt="" />
                    <h4 className='text-xl mt-2 font-bold'>Timely Delivery</h4>
                </div>
            </div>
        </div>
    );
};

export default Chooses;