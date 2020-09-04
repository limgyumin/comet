import React from "react";
import "./Register.css";
import { Button } from "@material-ui/core";

const Register = () => {
  return (
    <div className="register">
      <h1 className="big_title">Hello, There!</h1>
      <h3 className="small_title">Comet은 당신의 1일 1커밋을 도와드립니다.</h3>
      <Button className="start_button" variant="contained">
        시작하기
      </Button>
    </div>
  );
};

export default Register;
