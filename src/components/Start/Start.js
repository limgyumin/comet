import React from "react";
import "./Start.css";
import FadeIn from "react-fade-in";
import { Button, withStyles } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
  root: {
    boxShadow: "none",
    color: theme.palette.getContrastText("#0080FF"),
    fontFamily: "Noto Sans KR",
    fontWeight: 300,
    backgroundColor: "#0080FF",
    width: "8rem",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#0080FF",
    },
  },
}))(Button);

const Start = ({ setIsStarted }) => {
  return (
    <div className="contents">
      <FadeIn>
        <h1 className="big_title">Hello, There!</h1>
        <h3 className="small_title">
          Comet은 당신의 1일 1커밋을 도와드립니다.
        </h3>
        <ColorButton
          variant="contained"
          onClick={() => {
            setIsStarted(true);
          }}
        >
          시작하기
        </ColorButton>
      </FadeIn>
    </div>
  );
};

export default Start;
