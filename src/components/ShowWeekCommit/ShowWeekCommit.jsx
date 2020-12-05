import React, { useState } from "react";
import "./ShowWeekCommit.scss";
import chart from "../../assets/icons/chart.svg";
import styled, { keyframes } from "styled-components";

import CountUp from "react-countup";
import FadeIn from "react-fade-in";

const ShowWeekCommit = ({ week, weekAvg }) => {
  let weekCommits = [3, 4, 10, 2, 9, 5, 7];
  let values = [];
  const maxValue = 20;
  for (let i = 5; i > 0; i--) {
    values.push(maxValue * (i / 5));
  }

  const animate = (commit) => keyframes`
    0% {
      height: 0%;
    }
    100% {
      height: ${commit * 10}%;
    }
  `;

  const Progress = styled.div`
    width: 0.6rem;
    height: ${(props) => props.commit * 10}%;
    border-radius: 2rem;
    background-color: #191b1d;
    animation: ${(props) => animate(props.commit)};
    animation-duration: 1.8s;
  `;

  return (
    <>
      {week >= 0 && (
        <div className="ShowWeek">
          <div className="ShowWeek-Header">
            <img src={chart} alt={chart} />
            <p className="ShowWeek-Header-Title">주간 커밋 수</p>
          </div>

          <div className="ShowWeek-Chart">
            <div className="ShowWeek-Chart-Area">
              {weekCommits.map((commit, idx) => (
                <div key={idx} className="ShowWeek-Chart-Area-Progress">
                  <Progress commit={commit} />
                </div>
              ))}
            </div>
            {values.map((value, idx) => (
              <div key={idx} className="ShowWeek-Chart-Value">
                <p>{value}</p>
              </div>
            ))}
            <div className="ShowWeek-Chart-Value">
              <p>0</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowWeekCommit;
