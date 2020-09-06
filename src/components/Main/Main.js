import React, { useEffect } from "react";
import { observer } from "mobx-react";
import stores from "../../stores";
import { useQuery } from "@apollo/react-hooks";
import GET_GITHUB_API from "../../assets/api/gql/userInfoQuery";

import Header from "components/Header";
import ShowTotalCommit from "components/ShowTotalCommit";
import ReactLoading from "react-loading";
import "./Main.css";

const Main = observer(() => {
  const { userInfo, handleUserData, getUserId } = stores.UserStore;
  const { data, loading, error } = useQuery(GET_GITHUB_API(getUserId()));

  if (error) {
    console.log(error);
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
        <ShowTotalCommit />
      ) : (
        <div className="loader">
          <ReactLoading
            type={"bars"}
            color={"#EEEEEE"}
            height={"8%"}
            width={"8%"}
          />
        </div>
      )}
    </>
  );
});

export default Main;
