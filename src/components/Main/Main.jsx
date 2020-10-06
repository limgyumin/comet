import React from "react";
import { observer } from "mobx-react";

import FadeIn from "react-fade-in";
import "./Main.scss";
import ShowTotalCommit from "components/ShowTotalCommit";
import ShowTodayCommit from "components/ShowTodayCommit";
import ShowWeekCommit from "components/ShowWeekCommit";
import MainArea from "../common/MainArea/MainArea";

const Main = observer(
  ({
    profile,
    name,
    bio,
    total,
    intention,
    today,
    todayChange,
    week,
    weekAvg,
    logout,
  }) => {
    return (
      <>
        <MainArea profile={profile} name={name} bio={bio} logout={logout}>
          <FadeIn delay={200}>
            <div className="Main-FirstLine">
              <ShowTodayCommit today={today} todayChange={todayChange} />
              <ShowTotalCommit total={total} intention={intention} />
            </div>
          </FadeIn>
          <ShowWeekCommit week={week} weekAvg={weekAvg} />
        </MainArea>
      </>
    );
  }
);

export default Main;
