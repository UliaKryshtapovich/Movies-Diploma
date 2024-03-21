import React from "react";
import { useNavigate } from "react-router-dom";
import '../success/success.scss';

const Success = () => {
  const navigate = useNavigate();

  const handleWelcomeClick = () => {
    navigate("/postersList");
  };

  return (
    <div className="success-wrapper">
      <div className="success-main"> 
      <h3>You have successfully logged into your account!</h3>
      <button onClick={handleWelcomeClick}>Welcome</button>
      </div>
    </div>
  );
};

export default Success;

