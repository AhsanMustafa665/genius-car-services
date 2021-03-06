import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../SharedPages/Loading/Loading';


const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
    

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
         return <Loading></Loading>
     }
   

    if (user) {
        console.log('user',user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        // console.log(event.target.email.value);
        // console.log(event.target.name.value);
        // console.log(event.target.password.value);
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName});
          console.log('Updated profile');
          navigate('/home')
        
    }
    
    return (
        <div className='register-form'>
            <h2 className='text-center text-success'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Your name' />

                <input type="email" name="email" id="" placeholder='Email address' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                
                {/* <label className={agree?'ps-2 text-primary':'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Service Terms and Conditions</label> */}
                
                <label className={`ps-2 ${agree? '':'text-danger'}`} htmlFor="terms">Accept Genius Car Service Terms and Conditions</label>
                
                <input disabled={!agree} className='mx-auto w-50 btn btn-success mt-3' type="submit" value="Register" />
            </form>
            <p>Already have an account?<Link to={'/login'} onClick={navigateLogin} className='text-danger text-decoration-none'>Please login.</Link></p>
            
            <SocialLogin></SocialLogin>
        </div>
    );
};
export default Register;