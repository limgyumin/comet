import React, { useCallback, useState, useEffect } from "react";
import stores from "../../stores";
import { observer } from "mobx-react";
import GitHubSuccess from "components/GitHubSuccess";

const GitHubContainer = observer(() => {
  const [code, setCode] = useState("");
  const { handleLogin } = stores.GitHubStore;
  const { handleUserId, isSuccess } = stores.UserInfoStore;
  const requestHandleLogin = useCallback(async () => {
    try {
      const response = await handleLogin(code);

      localStorage.setItem("userId", response.data["userId"]);

      console.log(response.data);
      handleUserId(response.data);
      isSuccess(true);
    } catch (error) {
      return error;
    }
  });

  useEffect(() => {
    if (code) {
      requestHandleLogin();
    }
  }, [code]);

  return (
    <>
      <GitHubSuccess setCode={setCode} />
    </>
  );
});

export default GitHubContainer;
