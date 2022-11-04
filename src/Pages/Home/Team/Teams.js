import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram} from "react-icons/fa";
import './Teams.css';

const Teams = () => {
    return (
        <div className='py-10'>
            <div className='proudcts-captions w-1/2 text-center mx-auto'>
                <h4 className='text-xl font-bold text-orange-500'>Team</h4>
                <h2 className='text-5xl font-bold my-4'>Meet Our Team</h2>
                <p>The majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which don't look even slighhly Beliebled</p>
            </div>
            <div className="team-members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
                <div className="card w-80  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mahdi Bafande</h2>
                        <h4>Car Engine Plug</h4>
                        <div className="social-icons flex gap-2 my-4">
                            <span>
                                <FaFacebook></FaFacebook>
                            </span>
                            <span>
                                <FaTwitter></FaTwitter>
                            </span>
                            <span>
                                <FaLinkedinIn></FaLinkedinIn>
                            </span>
                            <span>
                                <FaInstagram></FaInstagram>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://images.unsplash.com/photo-1517530094915-500495b15ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caleb Lucas</h2>
                        <h4>Car Engine Plug</h4>
                        <div className="social-icons flex gap-2 my-4">
                            <span>
                                <FaFacebook></FaFacebook>
                            </span>
                            <span>
                                <FaTwitter></FaTwitter>
                            </span>
                            <span>
                                <FaLinkedinIn></FaLinkedinIn>
                            </span>
                            <span>
                                <FaInstagram></FaInstagram>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://images.unsplash.com/photo-1618414975661-6d9ccc9a3b9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caleb Lucas</h2>
                        <h4>Car Engine Plug</h4>
                        <div className="social-icons flex gap-2 my-4">
                            <span>
                                <FaFacebook></FaFacebook>
                            </span>
                            <span>
                                <FaTwitter></FaTwitter>
                            </span>
                            <span>
                                <FaLinkedinIn></FaLinkedinIn>
                            </span>
                            <span>
                                <FaInstagram></FaInstagram>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;