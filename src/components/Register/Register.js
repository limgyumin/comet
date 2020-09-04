import React, { useState } from "react";
import "./Register.css";
import background from "../../assets/images/background.svg";
import StartSection from "../StartSection/StartSection";
import InputData from "../InputData/InputData";

const Register = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="register">
      {click ? <InputData /> : <StartSection setClick={setClick} />}
      <div className="background">
        <img src={background} alt={background} />
      </div>
    </div>
  );
};

export default Register;
