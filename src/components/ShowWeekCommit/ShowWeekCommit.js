import React from "react";
import "./ShowWeekCommit.css";
import chart from "../../assets/images/chart.svg";
import barChart from "../../assets/images/bar-chart.svg";

import CountUp from "react-countup";
import FadeIn from "react-fade-in";

const ShowWeekCommit = ({ weekCommit, weekAvg }) => {
  return (
    <>
      {weekAvg && (
        <FadeIn>
          <div className="week_area">
            <div className="week_container">
              <FadeIn>
                <div className="week_title">
                  <img src={chart} alt={chart} className="chart_icon" />
                  <h1 className="week_commit">이번 주 커밋</h1>
                  {weekCommit > 0 ? (
                    <CountUp end={weekCommit} className="week_count" />
                  ) : (
                    <h1 className="week_no_commit">{weekCommit}</h1>
                  )}
                  <h1 className="week_unit">회</h1>
                </div>
              </FadeIn>
            </div>
            <div className="week_container2">
              <FadeIn>
                <div className="week_title">
                  <img src={barChart} alt={barChart} className="chart_icon" />
                  <h1 className="week_commit">이번 주 평균 커밋</h1>
                  {weekCommit > 0 ? (
                    <CountUp end={weekAvg} className="week_count" />
                  ) : (
                    <h1 className="week_no_commit">{weekCommit}</h1>
                  )}
                  <h1 className="week_unit">회</h1>
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default ShowWeekCommit;
