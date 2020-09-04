import React, { useState } from "react";
import "./Register.css";
import background from "../../assets/images/background.svg";
import StartSection from "../StartSection/StartSection";

const Register = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="register">
      <StartSection />
      <div className="background">
        <img src={background} alt={background} />
      </div>
    </div>
  );
};

export default Register;
