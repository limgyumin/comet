import React, { useEffect } from "react";
import { observer } from "mobx-react";
import stores from "../../stores";
import "./ShowWeekCommit.css";
import chart from "../../assets/images/chart.svg";
import barChart from "../../assets/images/bar-chart.svg";

import CountUp from "react-countup";
import FadeIn from "react-fade-in";

const ShowWeekCommit = observer(() => {
  const { userInfo, weekCommit, setWeekCommit } = stores.UserStore;
  const {
    contributionsCollection: {
      contributionCalendar: { weeks },
    },
  } = userInfo;

  let commitCount = 0;

  const getWeekCommit = () => {
    weeks.map((week, index) => {
      if (index === weeks.length - 1) {
        week.contributionDays.map((day, index2) => {
          commitCount += day.contributionCount;
        });
        setWeekCommit(commitCount);
      }
    });
  };

  useEffect(() => {
    getWeekCommit();
  }, [weekCommit]);

  return (
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
                <CountUp end={weekCommit / 7} className="week_count" />
              ) : (
                <h1 className="week_no_commit">{weekCommit}</h1>
              )}
              <h1 className="week_unit">회</h1>
            </div>
          </FadeIn>
        </div>
      </div>
    </FadeIn>
  );
});

export default ShowWeekCommit;
