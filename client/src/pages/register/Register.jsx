import React from 'react';
import "../register/Register.css";

const Register = () => {
  return (
    <div className="register-container">
        <div className="register-wrapper">
            <h1 className="register-title">CREATE AN ACCOUNT</h1>
            <form action="">
                <input type="text" placeholder="first name"/>
                <input type="text" placeholder="last name"/>
                <input type="text" placeholder="user name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input type="password" placeholder="confirm password"/>
                <p className="agreement">By creating an account, I consent to the processing of my personal data in
                accordance with the <b>PRIVACY POLICY</b>.</p>
                <button>CREATE</button>
            </form>
        </div>
    </div>
  )
}

export default Register