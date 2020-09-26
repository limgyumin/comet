import React, { useState, useCallback } from "react";
import "./Register.css";
import { Button, withStyles } from "@material-ui/core";
import FadeIn from "react-fade-in";
import { Link, useHistory } from "react-router-dom";
import { observer } from "mobx-react";
import stores from "../../stores";
import github from "../../assets/images/github.svg";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#24292E"),
    fontFamily: "Noto Sans KR",
    fontWeight: 300,
    fontSize: "1rem",
    letterSpacing: "0.6px",
    backgroundColor: "#24292E",
    width: "15.4rem",
    height: "2.9rem",
    boxShadow: "0 0 0.1 0.5rem rgba(0,0,0,.5)",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#24292E",
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
    <div className="Register">
      <div className="Register-Text">
        <FadeIn delay={300}>
          {/*랜덤 타이틀 만들 예정 */}
          <h1 className="Register-Text-Title">Hello, There!</h1>
        </FadeIn>
        <FadeIn delay={500}>
          <h3 className="Register-Text-Subtitle">
            Comet, 당신의 1일 1커밋을 도와드립니다.
          </h3>
        </FadeIn>
      </div>
      <div className="Register-GitHub">
        <FadeIn delay={700}>
          <Link to="/auth" className="Register-GitHub-Link">
            <ColorButton variant="contained" onClick={() => {}}>
              <img src={github} alt={github} className="Register-GitHub-Icon" />
              GitHub으로 로그인
            </ColorButton>
          </Link>
        </FadeIn>
        <FadeIn delay={900}>
          <p className="Register-GitHub-Text">
            Comet을 사용하시려면 GitHub 계정이 필요합니다.
          </p>
        </FadeIn>
      </div>
    </div>
  );
});

export default Register;
