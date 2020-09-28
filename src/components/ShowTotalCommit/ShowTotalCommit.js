import React from "react";
import "./ShowTotalCommit.css";

import CountUp from "react-countup";
import FadeIn from "react-fade-in";

const ShowTotalCommit = ({ totalCommit, goalCommit }) => {
  return (
    <>
      {totalCommit && (
        <div className="total_container">
          <FadeIn>
            <div className="total_title">
              <h1 className="total_commit">전체 커밋</h1>
              <CountUp end={totalCommit} className="total_count" />
              <h1 className="total_unit">회</h1>
            </div>
            <h3 className="total_goal">
              {goalCommit} 커밋 까지 {goalCommit - totalCommit} 커밋 남았습니다.
            </h3>
          </FadeIn>
        </div>
      )}
    </>
  );
};

export default ShowTotalCommit;
