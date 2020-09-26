import React from "react";
import "./GitHubAuth.css";
import WebView from "react-electron-web-view";
import "./GitHubAuth.css";
import { OAUTH } from "../../config/config.json";

const GitHubAuth = () => {
  return (
    <div className="GitHubAuth">
      <div>
        <p>GitHub 인증하기</p>
      </div>
      <WebView src={OAUTH} className="GitHubAuth-WebView" />
    </div>
  );
};

export default GitHubAuth;
