import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../SharedPages/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, error, loading] =
    useSignInWithEmailAndPassword(auth);
  
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  
  if (loading || sending) {
    return <Loading></Loading>
  }

  if (user) {
    navigate(from, { replace: true });
  }

  let errorElement;
  if (error) {
     <p className="text-danger">Error: {error?.message}</p>
   }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = () => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email)
    toast('Send email')
    }
    else {
      toast('Please enter yor email address')
    }
  }

  return (
    <div>
      <h2 className="text-success text-center">Please Login</h2>
      <Form onSubmit={handleSubmit} className="container w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="success w-50 mx-auto d-block mb-3" type="submit">
          Login
        </Button>
        {errorElement}
      </Form>
      <div className="text-center">
        <p>
          New to genius car?
          <Link
            to={"/register"}
            onClick={navigateRegister}
            className="text-primary text-decoration-none"
          >
            Please register.
          </Link>
        </p>
        <p>
          Forget password?
          <button
            
            onClick={resetPassword}
            className="text-primary btn btn-link text-decoration-none"
          >
            Reset password
          </button>
        </p>
      </div>
      <SocialLogin></SocialLogin>
      <ToastContainer/>
    </div>
  );
};

export default Login;
