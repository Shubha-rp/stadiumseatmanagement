import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

export default function SignUp() {
  const navigate = useNavigate(); // Use navigate hook directly inside the component
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    const user = {
      name,
      email,
      password
    };

    try {
      const response = await axios.post('http://localhost:8000/api/user/sinup', user);

      if (response.data.status === "success") {
        alert("User created successfully!");
        setSuccess('Sign up successful! You can now log in.');
        setError('');
        setName('');
        setEmail('');
        setPassword('');
        navigate('/SignIn'); // Navigate to home or any other route upon successful sign-up
      } else {
        
        setError(response.data.message || 'Sign up failed');
        setSuccess('');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during sign up. Please try again.');
      alert("This email is already taken")
      setSuccess('');
    }
  };

  return (
   
    <div className='signup-container'>
      <h1 className='signup-title'>Sign Up</h1>
      <form className='signup-form' onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder='Name'
          className='signup-input'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder='Email'
          className='signup-input'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password'
          className='signup-input'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='signup-button'>Sign up</button>
        {error && <p className='signup-error'>{error}</p>}
        {success && <p className='signup-success'>{success}</p>}
      </form>
      <div className="signup-login">
        <p className="signupcolor">Have an account?</p>
        <Link to={"/SignIn"} className='signup-login-link'>
          Sign in
        </Link>
      </div>
    </div>
    
  );
}
