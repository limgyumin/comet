import React from "react";
import "./GitHubAuth.css";
import { useHistory } from "react-router-dom";

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
        <p className="GitHubAuth-Header-Title">시작하기</p>
      </div>
      <div className="GitHubAuth-Login">
        <h3 className="GitHubAuth-Login-Title">
          이름과 GitHub 아이디를 입력해주세요.
        </h3>
        <div className="GitHubAuth-Login-TextField">
          <CssTextField
            label="이름"
            variant="outlined"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CssTextField
            label="GitHub 아이디"
            variant="outlined"
            size="small"
            value={id}
            onChange={(e) => onIdChange(e)}
          />
        </div>
        <div className="GitHubAuth-Login-Button">
          <BottomButton
            variant="contained"
            disabled={disable}
            onClick={() => requestHandleRegister()}
          >
            확인
          </BottomButton>
        </div>
        <p className="GitHubAuth-Login-Text">
          이름을 입력하지 않을 시 GitHub 이름으로 대체됩니다.
        </p>
      </div>
    </div>
  );
};

export default GitHubAuth;
