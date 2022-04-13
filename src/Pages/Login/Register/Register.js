import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target.email.value);
        // console.log(event.target.name.value);
        // console.log(event.target.password.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

    }
    
    return (
        <div className='register-form'>
            <h2 className='text-center text-success'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Your name' />

                <input type="email" name="email" id="" placeholder='Email address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account?<Link to={'/login'} onClick={navigateLogin} className='text-danger text-decoration-none'>Please login.</Link></p>
        </div>
    );
};
export default Register;