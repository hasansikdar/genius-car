import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebaseConfig';

const auth = getAuth(app);
export const AuthContextProvider = createContext();

const AuthContext = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);


    // create user with email and passowrd
    const createAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user with email and password
    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signupwithOtherAccount = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const updateInfo = (profileInfo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, profileInfo);
    }
    // logout
    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }
    const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email);
    }
    // onAuthstate changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currenUser =>{
            setUser(currenUser);
            setLoading(false);
        })
        return() =>{
            unsubscribe();
        }
    },[])

    const authInfo = {user, resetPassword, loading, createAccount, login, updateInfo, logout, signupwithOtherAccount};
    return (
        <AuthContextProvider.Provider value={authInfo}>
            {children}
        </AuthContextProvider.Provider>
    );
};

export default AuthContext;