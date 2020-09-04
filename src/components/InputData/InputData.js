import React, { useState } from "react";
import "./InputData.css";
import { Button, TextField, withStyles } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
  root: {
    boxShadow: "none",
    color: theme.palette.getContrastText("#0080FF"),
    fontFamily: "Noto Sans KR",
    fontWeight: 300,
    backgroundColor: "#0080FF",
    width: 120,
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#0080FF",
    },
  },
}))(Button);

const CssTextField = withStyles({
  root: {
    width: "20rem",
    marginBottom: "1.4rem",
    "& label.Mui-focused": {
      color: "#0080FF",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#0080FF",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#0080FF",
      },
    },
  },
})(TextField);

const InputData = () => {
  const [id, setId] = useState("");
  const textHandler = () => {};

  return (
    <div>
      <div className="contents">
        <h1 className="big_title">시작하기 앞서서</h1>
        <h3 className="small_title">
          Comet은 당신의 GitHub 아이디를 필요로 합니다.
        </h3>
        <CssTextField
          label="GitHub 아이디"
          variant="outlined"
          size="small"
          onChange={() => {}}
        />
        <ColorButton
          variant="contained"
          onClick={() => {
            console.log("clicked");
          }}
        >
          완료
        </ColorButton>
      </div>
    </div>
  );
};

export default InputData;
