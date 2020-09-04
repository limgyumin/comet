import React from "react";
import "./StartSection.css";
import { Link } from "react-router-dom";
import { Button, withStyles } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
  root: {
    boxShadow: "none",
    color: theme.palette.getContrastText("#0080FF"),
    fontFamily: "Noto Sans KR",
    fontWeight: 300,
    backgroundColor: "#0080FF",
    width: 130,
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#0080FF",
    },
  },
}))(Button);

const StartSection = () => {
  return (
    <div>
      <div className="contents">
        <h1 className="big_title">Hello, There!</h1>
        <h3 className="small_title">
          Comet은 당신의 1일 1커밋을 도와드립니다.
        </h3>
        <Link to="/input" className="button">
          <ColorButton variant="contained">시작하기</ColorButton>
        </Link>
      </div>
    </div>
  );
};

export default StartSection;
