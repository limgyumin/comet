import React, { useState } from "react";
import "./Register.css";
import background from "../../assets/images/background.svg";
import Start from "../Start/Start";
import InputUserId from "../InputUserId/InputUserId";

const Register = () => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <div className="register">
      {isStarted ? <InputUserId /> : <Start setIsStarted={setIsStarted} />}
    </div>
  );
};

export default Register;
