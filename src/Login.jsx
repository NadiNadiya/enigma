
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoggedIn, setEmail }) => {
  const [email, setEmailInput] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic (fake login for demonstration purposes)
    if (email === 'user@example.com' && password === 'password') {
      // Redirect to the home page after successful login
      setLoggedIn(true);
      setEmail(email);
      navigate('/');
    } else {
      // Handle unsuccessful login (show error message, etc.)
      alert('Invalid credentials');
    }
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <h1>Login</h1>
      </div>
      <div className="inputContainer">
        <input
          type="email"
          className="inputBox"
          placeholder="Enter your email here"
          value={email}
          onChange={(e) => setEmailInput(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <input
          type="password"
          className="inputBox"
          placeholder="Enter your password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="buttonContainer">
        <input
          className="inputButton"
          type="button"
          onClick={handleLogin}
          value="Login"
        />
      </div>
    </div>
  );
};


export default Login;
