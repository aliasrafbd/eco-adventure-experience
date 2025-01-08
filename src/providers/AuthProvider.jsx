import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles


export const AuthContext = createContext();

export const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    const [email, setAuthEmail] = useState("");

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const signInUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }


    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true)
        toast.success("You are Logged Out")
        return signOut(auth)
    }

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
            once: false,    // Set to false to trigger animations every time you scroll
            mirror: true,   // Enable to animate on scrolling back up
            offset: 120,    // Offset to trigger animation earlier or later
        });
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        email, setAuthEmail, user, setUser, logOut, createNewUser, googleSignIn, updateUserProfile, signInUser, loading, setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            <div>
                {children}
            </div>
            <ToastContainer position="top-center"></ToastContainer>
        </AuthContext.Provider>
    );
};

export default AuthProvider;