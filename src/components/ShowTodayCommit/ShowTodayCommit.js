import React, { useEffect } from "react";
import { observer } from "mobx-react";
import stores from "../../stores";
import "./ShowTodayCommit.css";

import CountUp from "react-countup";
import FadeIn from "react-fade-in";

const ShowTodayCommit = observer(() => {
  const { userInfo, todayCommit, setTodayCommit } = stores.UserStore;
  const {
    contributionsCollection: {
      contributionCalendar: { weeks },
    },
  } = userInfo;

  const getTodayCommit = () => {
    weeks.map((week, index) => {
      if (index === weeks.length - 1) {
        week.contributionDays.map((day, index2) => {
          if (index2 === week.contributionDays.length - 1) {
            setTodayCommit(day.contributionCount);
          }
        });
      }
    });
  };

  useEffect(() => {
    getTodayCommit();
  }, [todayCommit]);

  return (
    <div className="today_container">
      <div className="today_title">
        <h1 className="today_commit">오늘 커밋</h1>
        {todayCommit && <CountUp end={todayCommit} className="today_count" />}
        <h1 className="today_unit">회</h1>
      </div>
      <h3 className="today_comment">훌륭해요! 이대로 쭉 갑시다!</h3>
    </div>
  );
});

export default ShowTodayCommit;
