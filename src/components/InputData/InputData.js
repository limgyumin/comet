import React, { useState, useCallback } from "react";
import "./InputData.css";
import { Button, TextField, withStyles } from "@material-ui/core";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import stores from "../../stores";

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

const CssTextField = withStyles({
  root: {
    width: "18rem",
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

const InputData = observer(() => {
  const [id, setId] = useState("");

  const { handleUserId } = stores.UserStore;

  const onSubmit = useCallback(() => {
    handleUserId(id);
  }, [id, handleUserId]);

  return (
    <div className="contents">
      <FadeIn>
        <h1 className="big_title">시작하기 앞서서</h1>
        <h3 className="small_title">
          Comet은 당신의 GitHub 아이디를 필요로 합니다.
        </h3>
        <CssTextField
          label="GitHub 아이디"
          variant="outlined"
          value={id}
          size="small"
          onChange={(e) => {
            setId(e.target.value);
            console.log(e.target.value);
          }}
        />
        <Link to="/main" className="button">
          <ColorButton variant="contained" onClick={() => onSubmit()}>
            완료
          </ColorButton>
        </Link>
      </FadeIn>
    </div>
  );
});

export default InputData;
