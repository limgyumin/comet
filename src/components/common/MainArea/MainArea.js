import React from "react";
import "./MainArea.css";
import LightButton from "../../common/materialUI/LightButton";
import refresh from "../../../assets/icons/refresh.svg";
import FadeIn from "react-fade-in";

const MainArea = ({ children, name }) => {
  return (
    <div className="MainArea">
      <FadeIn delay={200}>
        <div className="MainArea-Container">
          <div className="MainArea-Container-Header">
            <div className="MainArea-Container-Header-Text">
              <FadeIn delay={300}>
                <h1 className="MainArea-Container-Header-Text-Title">
                  Overview
                </h1>
              </FadeIn>
              <FadeIn delay={400}>
                <h3 className="MainArea-Container-Header-Text-Subtitle">
                  {name}님의 GitHub 정보를 표시합니다.
                </h3>
              </FadeIn>
            </div>
            <FadeIn delay={400}>
              <div className="MainArea-Container-Header-Button">
                <LightButton
                  variant="contained"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  <img
                    src={refresh}
                    alt={refresh}
                    className="MainArea-Container-Header-Button-Icon"
                  />
                </LightButton>
                <div className="MainArea-Container-Header-Button-Info">
                  <h3>i</h3>
                </div>
              </div>
            </FadeIn>
          </div>
          {children}
        </div>
      </FadeIn>
    </div>
  );
};

export default MainArea;
