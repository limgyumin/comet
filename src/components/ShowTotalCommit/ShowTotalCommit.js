import React from "react";
import "./ShowTotalCommit.css";

import CountUp from "react-countup";
import FadeIn from "react-fade-in";

const ShowTotalCommit = ({ totalCommit, goalCommit }) => {
  return <>{totalCommit >= 0 && <div className="ShowTotal"></div>}</>;
};

export default ShowTotalCommit;
