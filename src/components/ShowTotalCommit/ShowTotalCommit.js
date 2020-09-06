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
    <div className="total_container">
      <FadeIn>
        <div className="total_title">
          <h1 className="total_commit">전체 커밋</h1>
          <CountUp end={totalContributions} className="total_count" />
          <h1 className="total_unit">회</h1>
        </div>
        <h3 className="total_goal">동해물과 백두산이 마르고 닳도록</h3>
      </FadeIn>
    </div>
  );
});

export default ShowTotalCommit;
