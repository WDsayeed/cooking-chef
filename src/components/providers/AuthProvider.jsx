import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({children}) => {
        const GoogleProvider = new GoogleAuthProvider();
        const GithubProvider = new GithubAuthProvider();

        const googleSignIn = ()=>{
                return signInWithPopup(auth, GoogleProvider)
        }
        const githubSignIn = ()=>{
                return signInWithPopup(auth, GithubProvider)
        }

        const createUser = (email, password)=>{
                return createUserWithEmailAndPassword(auth, email, password)
        }

        const signIn = (email, password)=>{
                return signInWithEmailAndPassword(auth, email, password)
        }
        const authInfo = {
                createUser,
                signIn,
                googleSignIn,
                githubSignIn
        }
        return (
                <AuthContext.Provider value={authInfo}>
                      {children}  
                </AuthContext.Provider>
        );
};

export default AuthProvider;