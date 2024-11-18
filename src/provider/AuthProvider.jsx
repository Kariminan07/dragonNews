import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";


export  const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setloading] =useState(true);
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    const createNewUser = (email,password) =>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const logout =() =>{
        setloading(true);
        return signOut(auth)
    };

    const userLogin =(email,password) =>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password)
    };

    const updateUserProfile = (updateData) =>{
        return updateProfile(auth.currentUser, updateData);
    }
    const authInfo ={
        user,
        setUser,
        createNewUser,
         logout,
         userLogin,
         loading,
         updateUserProfile,
    };
    useEffect (() =>{
        const unsubscribe =onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser);
            setloading(false);
        })
        return() =>{
            unsubscribe();

        }
    })
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;