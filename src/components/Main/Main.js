import React from "react";
import { observer } from "mobx-react";

import "./Main.css";
import Header from "components/Header";
import ShowTotalCommit from "components/ShowTotalCommit";
import ShowTodayCommit from "components/ShowTodayCommit";
import ShowWeekCommit from "components/ShowWeekCommit";
import MainArea from "../common/MainArea/MainArea";

const Main = observer(
  ({
    profile,
    name,
    bio,
    totalCommit,
    goalCommit,
    todayCommit,
    todayChange,
    weekCommit,
    weekAvg,
    sliceText,
    logout,
  }) => {
    return (
      <>
        <MainArea name={name}>
          <div className="Main-FirstLine">
            <ShowTodayCommit
              todayCommit={todayCommit}
              todayChange={todayChange}
            />
            <ShowTotalCommit
              totalCommit={totalCommit}
              goalCommit={goalCommit}
            />
          </div>
          {/* <ShowWeekCommit weekCommit={weekCommit} weekAvg={weekAvg} /> */}
        </MainArea>
      </>
    );
  }
);

export default Main;
