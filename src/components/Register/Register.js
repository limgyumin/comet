import React, { useState, useCallback } from "react";
import "./Register.css";
import { Button, withStyles } from "@material-ui/core";
import FadeIn from "react-fade-in";
import { useHistory } from "react-router-dom";
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

const Register = observer(() => {
  const [id, setId] = useState("");
  const { handleUserId, setUserId } = stores.UserStore;
  const history = useHistory();

  const submitUserId = useCallback(() => {
    handleUserId(id);
    setUserId(id);
    history.push("/");
  }, [id, handleUserId]);

  return (
    <div className="contents">
      <FadeIn>
        <h1 className="big_title">시작하기 앞서서</h1>
        <h3 className="small_title">
          Comet은 당신의 GitHub 아이디를 필요로 합니다.
        </h3>
        <ColorButton variant="contained" onClick={() => submitUserId()}>
          완료
        </ColorButton>
      </FadeIn>
    </div>
  );
});

export default Register;
