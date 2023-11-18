import React from "react";
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login auth">
        <div className="container">
          <div className="info-container">
            <h1>Welcome!</h1>
            <p>Login in to your account to continue.</p>
            <div className="btn">
              <Link to='/' className='link'>
                <h3>Visit site</h3>
              </Link>
            </div>
          </div>
          <form action="" className="login-form">
            <div className="form-title">
              <h2>Login</h2>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input required type="email" name="email" id="" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input required type="password" name="password" id="" placeholder="Password" />
            </div>
            <div className="form-group">
              <button className='btn' type="submit">Login</button>
            </div>
            <div className="form-group">
              <h6>Don't have an account?</h6>
              <Link to='/register' className='link'>
                <h6>Register</h6>
              </Link>
            </div>
          </form>
        </div>
    </div>
  );
}

export default Login;