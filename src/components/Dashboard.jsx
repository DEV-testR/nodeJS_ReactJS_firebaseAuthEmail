import React, { useContext,useEffect } from 'react'
// import { redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Auth'
import firebaseConfig from '../config'
import { getAuth } from 'firebase/auth';

const DashBoard = () => {
    const {currentUser} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is not logged in and redirect to the login page
        if (!currentUser) {
          navigate('/login');
        }
      }, [currentUser, navigate]);

    const clickSignOut = () => {
        console.log('clickSignOut');
        const auth = getAuth(firebaseConfig);
        auth.signOut()
        // return <redirect to ="/"/>
        navigate('/');
    }
    
    
    return (
        <>
        <h1>Log In</h1>
            <div className="container mt-5">
                <h1>Welcome</h1>
                <p>this is dashboard</p>
                <button className="btn-btn-danger" onClick={clickSignOut}>Sign Out</button>
            </div>
        </>
    )
}

export default DashBoard;