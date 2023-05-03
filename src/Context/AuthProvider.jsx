import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
 
const [user,setUser]=useState(null)
const [loader,setLoader]=useState(true);

 const createUser = (email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password);
 }

 const updateNameProfile=(userName,photo)=>{
    setLoader(true)
    updateProfile(auth.currentUser,{
        displayName: userName, photoURL: photo
    })
}

const loginWithEmail = (email,password)=>{
    setLoader(true)
   return signInWithEmailAndPassword(auth,email,password)
}

const logOut=() =>{
    setLoader(true)
   return signOut(auth);
}

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoader(false)
        })
        return ()=>{
            return unsubscribe;
        }
    },[])
    console.log(user);

    const authInfo ={
        user,
        loader,
        createUser,
        updateNameProfile,
        loginWithEmail,
        logOut,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;