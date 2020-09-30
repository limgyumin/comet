import React from "react";
import "./GitHubAuth.css";
import { useHistory } from "react-router-dom";

import FadeIn from "react-fade-in";
import before from "../../assets/images/before.svg";
import CssTextField from "../common/materialUI/CssTextField";
import BottomButton from "../common/materialUI/BottomButton";

const GitHubAuth = ({
  disable,
  id,
  name,
  setName,
  onIdChange,
  requestHandleRegister,
}) => {
  const history = useHistory();

  return (
    <div className="GitHubAuth">
      <FadeIn delay={300}>
        <div className="GitHubAuth-Header">
          <div
            className="GitHubAuth-Header-Button"
            onClick={() => history.push("/")}
          >
            <img
              src={before}
              alt={before}
              className="GitHubAuth-Header-Button-Before"
            />
            <p className="GitHubAuth-Header-Button-Text">이전</p>
          </div>
        </div>
      </FadeIn>
      <div className="GitHubAuth-Login">
        <FadeIn delay={400}>
          <h3 className="GitHubAuth-Login-Title">
            이름과 GitHub 아이디를 입력해주세요.
          </h3>
        </FadeIn>
        <div className="GitHubAuth-Login-TextField">
          <FadeIn delay={500}>
            <CssTextField
              label="이름"
              variant="outlined"
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FadeIn>
          <FadeIn delay={600}>
            <CssTextField
              label="GitHub 아이디"
              variant="outlined"
              size="small"
              value={id}
              onChange={(e) => onIdChange(e)}
            />
          </FadeIn>
        </div>
        <FadeIn delay={700}>
          <p className="GitHubAuth-Login-Text">
            이름을 입력하지 않을 시 GitHub 이름으로 대체됩니다.
          </p>
        </FadeIn>
        <div className="GitHubAuth-Login-Button">
          <BottomButton
            variant="contained"
            disabled={disable}
            onClick={() => requestHandleRegister()}
          >
            확인
          </BottomButton>
        </div>
      </div>
    </div>
  );
};

export default GitHubAuth;
