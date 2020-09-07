import React from "react";
import { observer } from "mobx-react";
import stores from "../../stores";
import "./Header.css";
import logout from "../../assets/images/logout.svg";

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
      <div className="header_user">
        {userInfo ? (
          <>
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
          </>
        ) : (
          <div className="loading_profile">
            <div className="loading_image"></div>
            <div className="loading_info">
              <div className="loading_name"></div>
              <div className="loading_bio"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default Header;
