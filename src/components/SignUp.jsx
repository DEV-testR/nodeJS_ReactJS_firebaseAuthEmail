import React, { useState } from 'react'
// import { redirect } from 'react-router-dom'
import firebaseConfig from '../config'
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [currentUser,setCurrentUser] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email,password} = e.target.elements;

        try {
            const auth = getAuth(firebaseConfig);
            await createUserWithEmailAndPassword(auth, email.value, password.value);
           // auth.signInWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);
        } catch (error) {
            // console.log(error);
            if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
                setCurrentUser(true); 
            }
            alert(error.message);
        }
    }

    if(currentUser) {
        //return <redirect to ="/dashboard"/>
        navigate('/dashboard');
    }

    return (
        <>
        <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default SignUp;