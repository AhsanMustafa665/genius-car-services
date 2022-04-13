import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit =(event) => {
        event.preventDefault();
        const  email = emailRef.current.value;
        const password = passwordRef.current.value;
      
        console.log(email,password);
  }
  
  const navigateRegister = ()=> {
    navigate('/register');
  }

    return (
        <div>
            <h2 className='text-success text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit} className='container w-50 mx-auto'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button
   variant="success" type="submit">
    Submit
  </Button>
        </Form>
        <div className='text-center'>
        <p>New to genius car?<Link to={'/register'} onClick={navigateRegister} className='text-danger text-decoration-none'>Please register.</Link></p>
        </div>
        </div>
    );
};

export default Login;