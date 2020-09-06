import React, { useEffect } from "react";
import { observer } from "mobx-react";
import stores from "../../stores";
import "./ShowTodayCommit.css";

// import CountUp from "react-countup";
// import FadeIn from "react-fade-in";

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
    <div>
      <h1>{todayCommit}</h1>
    </div>
  );
});

export default ShowTodayCommit;
