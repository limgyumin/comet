import React from "react";
import { observer } from "mobx-react";

import "./Main.css";
import Header from "components/Header";
import ShowTotalCommit from "components/ShowTotalCommit";
import ShowTodayCommit from "components/ShowTodayCommit";
import ShowWeekCommit from "components/ShowWeekCommit";

const Main = observer(
  ({
    profile,
    name,
    bio,
    totalCommit,
    goalCommit,
    todayCommit,
    weekCommit,
    weekAvg,
    sliceText,
    logout,
  }) => {
    return (
      <>
        <Header
          profile={profile}
          name={name}
          bio={bio}
          logout={logout}
          sliceText={sliceText}
        />
        <ShowTotalCommit totalCommit={totalCommit} goalCommit={goalCommit} />
        <ShowTodayCommit todayCommit={todayCommit} />
        <ShowWeekCommit weekCommit={weekCommit} weekAvg={weekAvg} />
      </>
    );
  }
);

export default Main;
