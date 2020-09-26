import React, { useEffect } from "react";
import "./GitHubAuth.css";
import WebView from "react-electron-web-view";
import { OAUTH } from "../../config/config.json";
import before from "../../assets/images/before.svg";
import { useHistory } from "react-router-dom";
import stores from "../../stores";
import { observer } from "mobx-react";

const GitHubAuth = observer(() => {
  const { wait, success } = stores.UserInfoStore;
  const history = useHistory();

  useEffect(() => {
    console.log(success);
    if (success) {
      console.log(success);
      history.push("/");
    }
  }, [success]);

  return (
    <div className="GitHubAuth">
      <div className="GitHubAuth-Header">
        <div
          className="GitHubAuth-Header-Button"
          onClick={() => (wait ? null : history.push("/"))}
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
});

export default GitHubAuth;
