import React, { useContext } from 'react';
import { AuthContextProvider } from '../../Authcontext/AuthContext';

const Profile = () => {
    const {user,updateInfo} = useContext(AuthContextProvider);


    const handleUpdateProfile = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const updateprofile = {
            displayName:name,
            photoURL:photourl,
        }
        updateInfo(updateprofile)
        .then(res => {
            
            form.reset();
            alert('Profile Update Successful')
        })
        .then(error => console.log(error));
    }
    console.log(user);
    return (
        <div className="hero py-10">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update Your Profile</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdateProfile} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" defaultValue={user?.displayName} type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photourl" defaultValue={user?.photoURL} type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input readOnly defaultValue={user?.email}  type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;