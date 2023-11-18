import React from "react";
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register auth">
        <div className="container">
          <form action="" className="register-form">
            <div className="form-title">
              <h2>Sign up</h2>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input required type="username" name="username" id="" placeholder="Username" />
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
              <button className='btn' type="submit">Submit</button>
            </div>
            
          </form>
          <div className="info-container">
            <h1>Already Have an Account?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, impedit alias.</p>
            <div className="btn-container">
              <Link to='/login' className='link '>
                <h3 className="btn">Login</h3>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Register;