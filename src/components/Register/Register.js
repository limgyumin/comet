import React from "react";
import "./Register.css";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import github from "../../assets/images/github.svg";
import BoxShadowButton from "../common/materialUI/BoxShadowButton";

const Register = ({ randomTitle }) => {
  return (
    <div className="Register">
      <div className="Register-Text">
        <FadeIn delay={300}>
          <h1 className="Register-Text-Title">{randomTitle()}</h1>
        </FadeIn>
        <FadeIn delay={400}>
          <h3 className="Register-Text-Subtitle">
            Comet, 당신의 1일 1커밋을 도와드립니다.
          </h3>
        </FadeIn>
      </div>
      <div className="Register-GitHub">
        <FadeIn delay={500}>
          <Link to="/auth" className="Register-GitHub-Link">
            <BoxShadowButton variant="contained" onClick={() => {}}>
              <img src={github} alt={github} className="Register-GitHub-Icon" />
              GitHub 아이디로 시작
            </BoxShadowButton>
          </Link>
        </FadeIn>
        <FadeIn delay={600}>
          <p className="Register-GitHub-Text">
            Comet을 사용하시려면 GitHub 아이디가 필요합니다.
          </p>
        </FadeIn>
      </div>
    </div>
  );
};

export default Register;
