import React, { useContext, useState } from 'react';
import signup from '../../assets/images/login/login.svg';
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContextProvider } from '../../Authcontext/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';

const Signup = () => {
    const [error, setError] = useState('password must be 6 charecter');
    const {createAccount, updateInfo, signupwithOtherAccount} = useContext(AuthContextProvider)
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        const profileInfo = {
            displayName: name,
            photoURL:photoUrl,
        }
        createAccount(email, password)
        .then(result =>{
            const user = result.user;
            form.reset();
            updateInfo(profileInfo);
        }).catch(error => {
            console.log(error);
            setError(error.message);
        })
    }
    


    const handleGoogleSignIn = provider =>{
        signupwithOtherAccount(provider)
        .then(res => {
            const user = res.user;
            navigate(from, {replace: true});

        })
        .then(error => setError(error.messege))

    }
    return (
        <div className="hero  py-10">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-4  items-center">
                <div className='mr-4'>
                    <img className='w-full' src={signup} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="text-center py-5">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSignup} action="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered rounded"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered rounded"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered rounded"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered rounded" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">{error}</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary rounded btn-error">Sign Up</button>
                            </div>
                        </form>
                        <div className='extra-signup text-center py-5'>
                            <p>Or Sign Up with</p>
                            <div className='social-media-icons text-center '>
                                <button className='btn text-white btn-outline btn-accent mr-3 mt-4'>
                                    <FaFacebookF></FaFacebookF>
                                </button>
                                <button className='btn text-white btn-outline btn-primary mr-3 mt-4'>
                                    <FaGithub></FaGithub>
                                </button>
                                <button onClick={() =>handleGoogleSignIn(googleProvider)} className='btn text-white btn-outline btn-secondary mr-3 my-4 '>
                                    <FaGoogle></FaGoogle>
                                </button>
                                <p>Alreay Have an Account ? <Link className='link text-blue-500' to='/login'>Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;