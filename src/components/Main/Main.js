import React, { useEffect } from "react";
import { observer } from "mobx-react";
import stores from "../../stores";
import { useQuery } from "@apollo/react-hooks";
import GET_GITHUB_API from "../../assets/api/gql/userInfoQuery";
import Header from "components/Header";

const Main = observer(() => {
  const { userInfo, handleUserData, getUserId } = stores.UserStore;
  const { data, loading, error } = useQuery(GET_GITHUB_API(getUserId()));

  useEffect(() => {
    if (!loading) {
      handleUserData(data);
    }
  }, [handleUserData, loading]);

  return (
    <div>
      <Header />
    </div>
  );
});

export default Main;
