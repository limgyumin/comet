import React from "react";
import "./Register.css";
import background from "../../assets/images/background.svg";
import StartSection from "../StartSection/StartSection";
import InputData from "../InputData/InputData";
import { Route, BrowserRouter } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <BrowserRouter>
        <Route path="/" exact={true} component={StartSection} />
        <Route path="/input" component={InputData} />
      </BrowserRouter>
      <div className="background">
        <img src={background} alt={background} />
      </div>
    </div>
  );
};

export default Register;
