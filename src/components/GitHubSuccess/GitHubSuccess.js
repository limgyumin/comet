import React from "react";
import "./GitHubSuccess.css";
import FadeIn from "react-fade-in";
import ReactLoading from "react-loading";

const GitHubSuccess = () => {
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
};

export default GitHubSuccess;
