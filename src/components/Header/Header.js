import React from "react";
import { observer } from "mobx-react";
import stores from "../../stores";
import "./Header.css";
import logout from "../../assets/images/logout.svg";
import flag from "../../assets/images/flag.svg";

const Header = observer(() => {
  const { userInfo, startLogout } = stores.UserStore;
  const sliceText = (string, maxLen) => {
    if (string.length > maxLen) {
      return string.slice(0, maxLen) + "...";
    } else {
      return string;
    }
  };

  return (
    <div className="header_main">
      {userInfo ? (
        <>
          <div className="header_area">
            <div className="header_profile">
              <img
                src={userInfo.avatarUrl}
                alt={userInfo.avatarUrl}
                className="header_avatar"
              />
              <div className="header_info">
                <p className="header_name">{userInfo.login}</p>
                <p className="header_bio">
                  {userInfo.bio ? sliceText(userInfo.bio, 30) : "-"}
                </p>
              </div>
            </div>
            <div className="logout_area">
              <img
                src={logout}
                alt={logout}
                className="header_logout"
                onClick={() => {
                  startLogout();
                }}
              />
            </div>
          </div>
          <div className="header_goal_area">
            <img src={flag} alt={flag} className="header_goal_flag" />
            <div className="header_goal_info">
              <p className="header_goal_title">하루 목표 커밋 설정</p>
              <p className="header_goal_subtitle">
                꾸준한 커밋 습관을 위해 목표를 정해보아요.
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="header_area">
          <div className="loading_profile">
            <div className="loading_image"></div>
            <div className="loading_info">
              <div className="loading_name"></div>
              <div className="loading_bio"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default Header;
