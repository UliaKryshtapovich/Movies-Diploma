import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const handleWelcomeClick = () => {
    navigate("/postersList");
  };

  return (
    <div className="success-wrapper">
      <p>You have successfully logged into your account!</p>
      <button onClick={handleWelcomeClick}>Welcome</button>
    </div>
  );
};

export default Success;

