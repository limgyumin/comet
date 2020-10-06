import React from "react";
import "./MainArea.css";
import LightButton from "../materialUI/LightButton";
import refresh from "../../../assets/icons/refresh.svg";
import door from "../../../assets/icons/logout.svg";
import FadeIn from "react-fade-in";

const MainArea = ({ children, profile, name, bio, logout }) => {
  return (
    <>
      {name && (
        <div className="MainArea">
          <FadeIn delay={100}>
            <div className="MainArea-Container">
              <div className="MainArea-Container-Header">
                <div className="MainArea-Container-Header-Text">
                  <FadeIn delay={200}>
                    <h1 className="MainArea-Container-Header-Text-Title">
                      Overview
                    </h1>
                  </FadeIn>
                  <FadeIn delay={300}>
                    <h3 className="MainArea-Container-Header-Text-Subtitle">
                      {name.length > 20 ? name.slice(0, 10) + "..." : name}님의
                      GitHub 정보를 표시합니다.
                    </h3>
                  </FadeIn>
                </div>
                <FadeIn delay={300}>
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
          <div className="MainArea-Side">
            <div className="MainArea-Side-Profile">
              <div className="MainArea-Side-Profile-Header">
                <img
                  src={profile}
                  alt={profile}
                  className="MainArea-Side-Profile-Header-Image"
                />
                <div className="MainArea-Side-Profile-Header-Button">
                  <img
                    src={door}
                    alt={door}
                    className="MainArea-Side-Profile-Header-Button-Image"
                    onClick={() => logout()}
                  />
                </div>
              </div>
              <div className="MainArea-Side-Profile-Info">
                <p className="MainArea-Side-Profile-Info-Name">{name}</p>
                <p className="MainArea-Side-Profile-Info-Bio">{bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainArea;
