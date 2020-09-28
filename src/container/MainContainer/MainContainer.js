import React, { useState, useCallback, useEffect } from "react";
import stores from "../../stores";
import { observer } from "mobx-react";
import Main from "../../components/Main/Main";
import { useHistory } from "react-router-dom";

const MainContainer = observer(() => {
  const [userData, setUserData] = useState({});
  const { handleUserInfo } = stores.MainStore;
  const history = useHistory();
  const requestHandleUserInfo = useCallback(async () => {
    const userId = localStorage.getItem("userId");
    try {
      const response = await handleUserInfo(userId);
      if (response) {
        setUserData(response.data);
      }
    } catch (error) {
      return error;
    }
  }, []);

  const sliceText = (string, maxLen) => {
    if (string.length > maxLen) {
      return string.slice(0, maxLen) + "...";
    } else {
      return string;
    }
  };

  const logout = () => {
    localStorage.removeItem("userId");
    history.push("/");
  };

  let goalCommit = 0;

  if (userData.total < 100) {
    goalCommit = Math.ceil(userData.total / 10) * 10;
  } else {
    goalCommit = Math.ceil(userData.total / 100) * 100;
  }

  useEffect(() => {
    requestHandleUserInfo();
  }, []);

  return (
    <>
      <Main
        profile={userData.profile}
        name={userData.name}
        bio={userData.bio}
        totalCommit={userData.total}
        goalCommit={goalCommit}
        todayCommit={userData.today}
        weekCommit={userData.week}
        weekAvg={userData.weekAvg}
        sliceText={sliceText}
        logout={logout}
      />
    </>
  );
});

export default MainContainer;
