import React, { useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignIn.css';

export default function SignIn() {
  const navigate = useNavigate(); // Use navigate hook directly inside the component
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const user = {
      email,
      password
    };

    try {
      const response = await axios.post('http://localhost:8000/api/user/login', user);

      if (response.status === 200) {
        // Handle success (e.g., display a success message)
        navigate('/?email=' + email);
        alert('Login successful!');
        setError('');
        setEmail('');
        setPassword('');
      } else {
        alert('invalid email or password!! Try again');
        setError(response.data.message || 'Login failed');
      }
    } catch (error) {
      alert('invalid email or password!! Try again');
      setError(error.response?.data?.message || 'An error occurred during login. Please try again.');
    }
  };

  return (
    <div className='signin-container'>
      <h1 className='signin-title'>Sign In</h1>

      <form className='signin-form' onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder='Email'
          className='signin-input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder='Password'
          className='signin-input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className='signin-button'>Sign In</button>
        {error && <p className='signin-error'>{error}</p>}
      </form>

      <div className="signin-signup">
        <p className="signincolor">Don't have an account?</p>
        <Link to={"/SignUp"} className='signin-signup-link'>
          Sign Up
        </Link>
      </div>
    </div>
  );
}
