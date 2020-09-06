import React from "react";
import { observer } from "mobx-react";
import stores from "../../stores";

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

  return (
    <div>
      <h1>{commitCount}</h1>
    </div>
  );
});

export default ShowWeekCommit;
