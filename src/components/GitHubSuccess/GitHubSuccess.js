import React, { useEffect } from "react";
import "./GitHubSuccess.css";
import FadeIn from "react-fade-in";
import ReactLoading from "react-loading";
import { useLocation } from "react-router-dom";
import stores from "../../stores";
import { observer } from "mobx-react";

const GitHubSuccess = observer(({ setCode }) => {
  const { isWait } = stores.UserInfoStore;
  const location = useLocation();

  const getUrlParams = () => {
    var params = {};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, (str, key, value) => {
      params[key] = value;
    });
    return params;
  };

  useEffect(() => {
    const params = getUrlParams();
    console.log(params.code);
    setCode(params.code);
    isWait(true);
  }, []);

  return (
    <div className="GitHubSuccess">
      <FadeIn delay={200}>
        <p className="GitHubSuccess-Title">인증이 완료되었습니다.</p>
        <p className="GitHubSuccess-Subtitle">아주 잠시만 기다려주세요!</p>
        <div className="GitHubSuccess-Loader">
          <ReactLoading
            type={"cylon"}
            color={"#757b81"}
            width={"40%"}
            height={"40%"}
          />
        </div>
      </FadeIn>
    </div>
  );
});

export default GitHubSuccess;
