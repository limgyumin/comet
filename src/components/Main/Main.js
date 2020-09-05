import React, { useEffect } from "react";
import { observer } from "mobx-react";
import stores from "../../stores";
import { useQuery } from "@apollo/react-hooks";
import GET_GITHUB_API from "../../assets/api/gql/userInfoQuery";
import Header from "components/Header";

const Main = observer(() => {
  const { userInfo, handleUserData, userId } = stores.UserStore;
  const { data, loading, error } = useQuery(GET_GITHUB_API(userId));

  useEffect(() => {
    if (!loading) {
      handleUserData(data);
    }
  }, [handleUserData, loading]);

  console.log(userInfo);
  return <div>{loading || !userInfo ? <>Loading</> : <Header />}</div>;
});

export default Main;
