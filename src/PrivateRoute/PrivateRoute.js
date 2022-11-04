import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContextProvider } from '../Authcontext/AuthContext';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContextProvider)
    if(user){
        return children;
    }
    if(loading){
        return <h1 className='text-5xl'>Loading....</h1>
    }
    
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
    
};

export default PrivateRoute;