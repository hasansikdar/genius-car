import React from 'react';
import { FaRegCalendarAlt, FaMapMarkerAlt, FaPhoneVolume } from "react-icons/fa";

const Address = () => {
    return (
        <div className='bg-black py-10 px-6 rounded w-4/5 mx-auto my-10 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='address-details flex items-center'>
                <div className='address-icon text-5xl mr-4'>
                    <FaRegCalendarAlt></FaRegCalendarAlt>
                </div>
                <div>
                    <p>We are open monday-friday</p>
                    <h2 className='text-2xl text-white font-bold'>7:00Am - 9:00Am</h2>
                </div>
            </div>
            <div className='address-details flex items-center'>
                <div className='address-icon text-5xl mr-4'>
                    <FaPhoneVolume></FaPhoneVolume>
                </div>
                <div>
                    <p>Have a question?</p>
                    <h2 className='text-2xl text-white font-bold'>+00801932182326</h2>
                </div>
            </div>
            <div className='address-details flex items-center'>
                <div className='address-icon text-5xl mr-4'>
                    <FaMapMarkerAlt></FaMapMarkerAlt>
                </div>
                <div>
                    <p>We are open monday-friday</p>
                    <h2 className='text-2xl text-white font-bold'>Dhaka, Salna</h2>
                </div>
            </div>
        </div>
    );
};

export default Address;