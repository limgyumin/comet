import React, { useEffect } from "react";
import { observer } from "mobx-react";
import stores from "../../stores";
import { useQuery } from "@apollo/react-hooks";
import GET_GITHUB_API from "../../assets/api/gql/userInfoQuery";

const Main = observer(() => {
  const { userData, handleUserData, userId } = stores.UserStore;
  const { data, loading, error } = useQuery(GET_GITHUB_API(userId));

  useEffect(() => {
    if (!loading) {
      handleUserData(data);
    }
  }, [handleUserData, loading]);

  return <div>{loading ? <>Loading</> : <>로딩끝</>}</div>;
});

export default Main;
