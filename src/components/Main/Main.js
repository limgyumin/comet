import React, { useEffect } from "react";
import { observer } from "mobx-react";
import stores from "../../stores";
import { useQuery } from "@apollo/react-hooks";
import GET_GITHUB_API from "../../assets/api/gql/userInfoQuery";
import { useHistory, withRouter } from "react-router-dom";

import "./Main.css";
import Header from "components/Header";
import ReactLoading from "react-loading";
import ShowTotalCommit from "components/ShowTotalCommit";
import ShowTodayCommit from "components/ShowTodayCommit";
import ShowWeekCommit from "components/ShowWeekCommit";

const Main = observer(() => {
  const { userInfo, handleUserData, getUserId } = stores.UserStore;
  const { data, loading, error } = useQuery(GET_GITHUB_API(getUserId()));

  const history = useHistory();

  if (error) {
    localStorage.removeItem("userId");
    history.push("/");
  }

  useEffect(() => {
    if (!loading) {
      handleUserData(data);
    }
  }, [handleUserData, loading]);

  return (
    <>
      <Header />
      {!loading && userInfo ? (
        <>
          <ShowTotalCommit />
          <ShowTodayCommit />
          <ShowWeekCommit />
        </>
      ) : (
        <div className="main_loader">
          <ReactLoading
            type={"bars"}
            color={"#DEDEDE"}
            height={"8%"}
            width={"8%"}
          />
        </div>
      )}
    </>
  );
});

export default withRouter(Main);
