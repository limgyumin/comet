import React from "react";
import "./ShowWeekCommit.scss";
import chart from "../../assets/icons/chart.svg";

import CountUp from "react-countup";
import FadeIn from "react-fade-in";

const ShowWeekCommit = ({ week, weekAvg }) => {
  return (
    <>
      {week >= 0 && (
        <div className="ShowWeek">
          <div className="ShowWeek-Header">
            <img src={chart} alt={chart} />
            <p className="ShowWeek-Header-Title">주간 커밋 수</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowWeekCommit;
