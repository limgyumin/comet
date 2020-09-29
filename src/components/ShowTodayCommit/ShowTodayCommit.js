import React from "react";
import "./ShowTodayCommit.css";

import CountUp from "react-countup";
import FadeIn from "react-fade-in";

const ShowTodayCommit = ({ todayCommit }) => {
  const noCommit = {
    width: "100%",
    backgroundColor: "#FF5E5E",
  };

  const challenge = {
    width: `${todayCommit * 10}%`,
  };

  const complete = {
    width: "100%",
    backgroundColor: "#FFB300",
  };

  return (
    <>
      {todayCommit >= 0 && (
        <FadeIn>
          <div className="today_container">
            <FadeIn>
              <div className="today_title">
                <h1 className="today_commit">오늘 커밋</h1>
                {todayCommit > 0 ? (
                  <CountUp end={todayCommit} className="today_count" />
                ) : (
                  <h1 className="today_no_commit">{todayCommit}</h1>
                )}
                <h1 className="today_unit">회</h1>
              </div>
              <div className="today_comment">
                {todayCommit === 0 ? (
                  <h3 className="today_bad">
                    잔소리 알림 장전! 당장 커밋하세요!
                  </h3>
                ) : todayCommit < 10 ? (
                  <h3 className="today_great">훌륭해요! 이대로 쭉 갑시다!</h3>
                ) : todayCommit < 40 ? (
                  <h3 className="today_complete">
                    목표 달성 완료! 아주 잘했어요! 😉
                  </h3>
                ) : (
                  <h3 className="today_tooMuch">세상에..... 😲</h3>
                )}
              </div>
              <div className="progress_bar">
                <div
                  className="inside_bar"
                  style={
                    todayCommit === 0
                      ? noCommit
                      : todayCommit < 10
                      ? challenge
                      : complete
                  }
                ></div>
              </div>
              <p className="max_commit">
                {todayCommit < 10 ? `${todayCommit} / ${10}` : "완료!"}
              </p>
            </FadeIn>
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default ShowTodayCommit;
