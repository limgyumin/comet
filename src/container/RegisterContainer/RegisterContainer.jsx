import React from "react";
import Register from "components/Register";

const RegisterContainer = () => {
  const random = Math.random();
  const randomTitle = () => {
    const number = Math.floor(random * 100);
    if (number > 0) {
      if (number > 0 && number <= 20) {
        return "반갑습니다!";
      } else if (number > 20 && number <= 40) {
        return "환영합니다!";
      } else if (number > 40 && number <= 60) {
        return "어서오세요!";
      } else if (number > 60 && number <= 80) {
        return "Welcome Back!";
      } else if (number > 80 && number <= 99) {
        return "Hello There!";
      }
    } else {
      return " (｡•́︿•̀｡) ";
    }
  };

  return (
    <>
      <Register randomTitle={randomTitle} />
    </>
  );
};

export default RegisterContainer;
