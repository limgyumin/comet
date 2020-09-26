import React, { useCallback, useState } from "react";
import stores from "../../stores";
import { observer } from "mobx-react";
import { useCallback } from "react";

import { store } from "react-notifications-component";
import "animate.css/animate.compat.css";

const GitHubContainer = observer(() => {
  const [code, setCode] = useState("");
  const { handleLogin } = stores.GitHubStore;
  const requesthandleLogin = useCallback(async () => {
    try {
      const response = await handleLogin(code);
      localStorage.setItem("userId", response.data["userId"]);
    } catch (error) {
      return error;
    }
  });
  return <div></div>;
});

export default GitHubContainer;
