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
      </FadeIn>
    </div>
  );
};

export default GitHubSuccess;
