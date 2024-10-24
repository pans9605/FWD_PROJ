import React from 'react'
import './loginsignup.css'

const loginsignup = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                
                <input type="text" />
            </div>
            <div className="input">
                
                <input type="phone number" />
            </div>
            <div className="input">
                
                <input type="password" />
            </div>
        </div>
        <div className="submit-container">
            <div className="submit">SignUp</div>
            <div className="submit">Login</div>
        </div>
    </div>

  );
};

export default loginsignup