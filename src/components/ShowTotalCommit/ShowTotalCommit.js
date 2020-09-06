import React from "react";
import { observer } from "mobx-react";
import stores from "../../stores";
import "./ShowTotalCommit.css";

import CountUp from "react-countup";
import FadeIn from "react-fade-in";

const ShowTotalCommit = observer(() => {
  const { userInfo } = stores.UserStore;

  const {
    contributionsCollection: {
      contributionCalendar: { totalContributions },
    },
  } = userInfo;

  return (
    <div className="container">
      <FadeIn>
        <div className="show_commit">
          <h1 className="show_total">전체 커밋</h1>
          <CountUp end={totalContributions} className="show_count" />
          <h1 className="show_unit">회</h1>
        </div>
        <h3 className="show_goal">동해물과 백두산이 마르고 닳도록</h3>
      </FadeIn>
    </div>
  );
});

export default ShowTotalCommit;
