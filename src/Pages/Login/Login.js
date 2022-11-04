import React, { useContext, useState } from 'react';
import signup from '../../assets/images/login/login.svg';
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContextProvider } from '../../Authcontext/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [error, setError] = useState('');
    const { login, signupwithOtherAccount } = useContext(AuthContextProvider)
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate(from, {replace: true});
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
                        <h1 className="text-3xl font-bold">Login</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSignIn} action="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Email" className="input input-bordered rounded" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input name="password" type="password" placeholder="Password" className="input input-bordered rounded" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forget Password</a>
                                </label>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">{error}</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary rounded btn-error">Login</button>
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
                                <button onClick={() => handleGoogleSignIn(googleProvider)} className='btn text-white btn-outline btn-secondary mr-3 my-4 '>
                                    <FaGoogle></FaGoogle>
                                </button>
                                <p>Have an Account ? <Link className='link text-blue-500' to='/signup'>Sign In</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;