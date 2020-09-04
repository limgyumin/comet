import React from "react";
import "./StartSection.css";
import { Button, withStyles } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
  root: {
    boxShadow: "none",
    color: theme.palette.getContrastText("#0080FF"),
    fontFamily: "Noto Sans KR",
    fontWeight: 300,
    backgroundColor: "#0080FF",
    width: "20rem",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#0080FF",
    },
  },
}))(Button);

const StartSection = ({ setClick }) => {
  return (
    <div>
      <div className="contents">
        <h1 className="big_title">Hello, There!</h1>
        <h3 className="small_title">
          Comet은 당신의 1일 1커밋을 도와드립니다.
        </h3>
        <ColorButton
          variant="contained"
          onClick={() => {
            setClick(true);
          }}
        >
          시작하기
        </ColorButton>
      </div>
    </div>
  );
};

export default StartSection;
