import React from "react";
import { observer } from "mobx-react";
import stores from "../../stores";
import "./Header.css";

const Header = observer(() => {
  const { userInfo } = stores.UserStore;
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
            <img src={userInfo.avatarUrl} />
            <div className="header_info">
              <p className="header_name">{userInfo.login}</p>
              <p className="header_bio">
                {userInfo.bio ? sliceText(userInfo.bio, 30) : "-"}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="loading_image"></div>
            <div className="loading_info">
              <div className="loading_name"></div>
              <div className="loading_bio"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
});

export default Header;
