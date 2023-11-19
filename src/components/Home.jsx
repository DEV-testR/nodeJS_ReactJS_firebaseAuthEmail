import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Auth'


const Home = () => {
    const {currentUser} = useContext(AuthContext);
    console.log('BEGIN HOME')
    let composX = '';
    if(currentUser != null) {
        composX = (<>
            <div className="container mt-5">
            <h1>Home</h1>
            <p>You are logged in - <Link to="/dashboard">View DashBoard</Link></p>
            </div>
            </>)
    }else {
        composX = (<>
            <h1>Home</h1>
            <p>
                    <Link className="btn btn-primary mx-2" to="/login">Log In</Link>
                    or
                    <Link className="btn btn-success mx-2" to="/signup">Sign Up</Link>
            </p>
            </>)
    }
    return composX
}

export default Home;