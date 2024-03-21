import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../signIn/signIn.scss";

const SignIn = ({ onSignIn }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();

  const checkSignIn = () => {
    if (inputEmail.endsWith("@gmail.com") && inputPassword) {
      onSignIn();
      navigate("/success");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-form">
        <h2>Sign In</h2>
        <p>Email </p>
        <input
          type="email"
          placeholder="Enter your email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <p> Password </p>
        <input
          type="password"
          placeholder="Enter your password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
       <p> Forgot password? </p>
        <button onClick={checkSignIn}>Sign In</button>
        <p>Don’t have an account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
};

export default SignIn;
