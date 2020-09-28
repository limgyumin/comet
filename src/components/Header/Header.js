import React from "react";
import "./Header.css";
import door from "../../assets/images/logout.svg";
import flag from "../../assets/images/flag.svg";

const Header = ({ profile, name, bio, logout, sliceText }) => {
  return (
    <div className="header_main">
      <div className="header_area">
        <div className="header_profile">
          <img src={profile} alt={profile} className="header_avatar" />
          <div className="header_info">
            <p className="header_name">{name}</p>
            <p className="header_bio">{bio ? sliceText(bio, 30) : "-"}</p>
          </div>
        </div>
        <div className="logout_area">
          <img
            src={door}
            alt={door}
            className="header_logout"
            onClick={() => {
              logout();
            }}
          />
        </div>
      </div>
      <div
        className="header_goal_area"
        onClick={() => {
          alert("히힝");
        }}
      >
        <img src={flag} alt={flag} className="header_goal_flag" />
        <div className="header_goal_info">
          <p className="header_goal_title">하루 목표 커밋 설정</p>
          <p className="header_goal_subtitle">
            꾸준한 커밋 습관을 위해 목표를 정해보아요.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
