import React, { useState, useCallback } from "react";
import stores from "../../stores";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";

import { store } from "react-notifications-component";
import "animate.css/animate.compat.css";

const RegisterContainer = observer(() => {
  const [id, setId] = useState("");
  const { handleRegister } = stores.RegisterStore;
  const history = useHistory();

  const requestHandleRegister = useCallback(async () => {
    try {
      const response = await handleRegister(id);
      if (response.status === 200) {
        store.addNotification({
          title: "로그인 성공!",
          message: "이제 Comet을 사용해볼까요?",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "headShake"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      }
      localStorage.setItem("userId", response.data["id"]);
      history.push("/");
    } catch (error) {
      return error;
    }
  });
  return <div></div>;
});

export default RegisterContainer;
