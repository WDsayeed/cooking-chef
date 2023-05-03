import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null)
        const [loading, setLoading] = useState(true)
        const GoogleProvider = new GoogleAuthProvider();
        const GithubProvider = new GithubAuthProvider();

        const googleSignIn = ()=>{
                setLoading(true)
                return signInWithPopup(auth, GoogleProvider)
        }
        const githubSignIn = ()=>{
                setLoading(true)
                return signInWithPopup(auth, GithubProvider)
        }

        const createUser = (email, password)=>{
                setLoading(true)
                return createUserWithEmailAndPassword(auth, email, password)
        }

        const signIn = (email, password)=>{
                setLoading(true)
                return signInWithEmailAndPassword(auth, email, password)
        }

        const logOut =()=>{
                setLoading(true)
                return signOut(auth)
        }
        useEffect( ()=>{
            const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
                        setUser(loggedUser)
                        setLoading(false)
                })
                return ()=> unsubscribe()
        },[])

        const authInfo = {
                user,
                loading,
                createUser,
                signIn,
                googleSignIn,
                githubSignIn,
                logOut
        }
        return (
                <AuthContext.Provider value={authInfo}>
                      {children}  
                </AuthContext.Provider>
        );
};

export default AuthProvider;