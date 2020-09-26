import React from "react";
import "./GitHubAuth.css";
import WebView from "react-electron-web-view";
import { OAUTH } from "../../config/config.json";
import before from "../../assets/images/before.svg";
import { useHistory } from "react-router-dom";

const GitHubAuth = () => {
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
        <p className="GitHubAuth-Header-Title">GitHub 인증하기</p>
      </div>
      <WebView src={OAUTH} className="GitHubAuth-Header-WebView" />
    </div>
  );
};

export default GitHubAuth;
