import React from "react";
import "./MainArea.css";
import LightButton from "../../common/materialUI/LightButton";
import refresh from "../../../assets/icons/refresh.svg";

const MainArea = ({ name }) => {
  return (
    <div className="MainArea">
      <div className="MainArea-Container">
        <div className="MainArea-Container-Header">
          <div className="MainArea-Container-Header-Text">
            <h1 className="MainArea-Container-Header-Text-Title">Overview</h1>
            <h3 className="MainArea-Container-Header-Text-Subtitle">
              {name}님의 GitHub 정보를 표시합니다.
            </h3>
          </div>
          <div className="MainArea-Container-Header-Button">
            <LightButton variant="contained" onClick={() => {}}>
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
        </div>
      </div>
    </div>
  );
};

export default MainArea;
