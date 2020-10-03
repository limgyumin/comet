import React from "react";
import "./ShowTodayCommit.css";
import calendar from "../../assets/icons/calendar.svg";
import up from "../../assets/icons/up.svg";
import styled, { keyframes } from "styled-components";

import moment from "moment";
import CountUp from "react-countup";

const ShowTodayCommit = ({ todayCommit, todayChange }) => {
  const calculatedCommit = todayCommit >= 10 ? 100 : todayCommit * 10;
  const animate = keyframes`
    0% {
      width: 0%;
    }
    100% {
      width: ${calculatedCommit}%;
    }
  `;
  const Progress = styled.div`
    width: ${calculatedCommit}%;
    height: 0.5rem;
    border-radius: 2rem;
    background-color: #ffffff;
    animation: ${animate};
    animation-duration: 1.8s;
  `;
  return (
    <>
      {todayCommit >= 0 && (
        <div className="ShowToday">
          <div className="ShowToday-Header">
            <div className="ShowToday-Header-Icon">
              <img src={calendar} alt={calendar} />
              <p>{moment().format("D")}</p>
            </div>
            <div className="ShowToday-Header-Text">
              <p className="ShowToday-Header-Text-Title">
                {moment().format("yyyy년 M월 D일")}
              </p>
              <p className="ShowToday-Header-Text-Subtitle">오늘 커밋 수</p>
            </div>
          </div>
          <div className="ShowToday-Header-Content">
            <div className="ShowToday-Header-Content-State">
              <CountUp
                end={todayCommit}
                delay={0.1}
                className="ShowToday-Header-Content-State-Count"
              />
              {todayChange > 0 && (
                <div className="ShowToday-Header-Content-State-Change">
                  <img src={up} alt={up} />
                  <p>{todayChange}</p>
                </div>
              )}
            </div>
            <div className="ShowToday-Header-Content-ProgressBar">
              {/* <div
                className="ShowToday-Header-Content-ProgressBar-Inside"
                style={todayCommit >= 10 ? complete : progress}
              ></div> */}
              <Progress />
            </div>
            <p className="ShowToday-Header-Content-Message">
              {todayCommit < 40
                ? todayCommit >= 10
                  ? "완료!"
                  : `${todayCommit} / 10`
                : "세상에... 🙄"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowTodayCommit;
