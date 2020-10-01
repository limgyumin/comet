import React from "react";
import "./ShowTodayCommit.css";
import calendar from "../../assets/icons/calendar.svg";

import CountUp from "react-countup";
import FadeIn from "react-fade-in";
import moment from "moment";

const ShowTodayCommit = ({ todayCommit, todayChange }) => {
  const date = new Date();
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
        </div>
      )}
    </>
  );
};

export default ShowTodayCommit;
