import React, {useState, useEffect} from "react";
import firebaseConfig from "../config";
import { getAuth } from 'firebase/auth';
import { createContext } from 'react';

// export const AuthContext = React.createContext();
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const auth = getAuth(firebaseConfig);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        })
    }, [])

    
    if(loading) {
        return <p>Loading...</p>
    }

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}