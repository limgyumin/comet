import React from "react";
import { observer } from "mobx-react";
import stores from "../../stores";
import "./Header.css";

const Header = observer(() => {
  const { userInfo } = stores.UserStore;
  return (
    <div className="header_main">
      <div className="header_user">
        <img src={userInfo.avatarUrl} />
        <div className="header_info">
          <p className="header_name">{userInfo.login}</p>
          <p className="header_bio">{userInfo.bio ? userInfo.bio : "-"}</p>
        </div>
      </div>
    </div>
  );
});

export default Header;
