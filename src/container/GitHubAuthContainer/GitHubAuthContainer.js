import React, { useCallback, useState, useEffect } from "react";
import stores from "../../stores";
import { observer } from "mobx-react";
import GitHubAuth from "components/GitHubAuth";
import { useHistory } from "react-router-dom";

import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.compat.css";

const GitHubAuthContainer = observer(() => {
  const [disable, setDisable] = useState(true);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const { handleRegister } = stores.GitHubAuthStore;
  const history = useHistory();
  const requestHandleRegister = useCallback(async () => {
    const data = {
      id,
      name,
    };
    try {
      const response = await handleRegister(data);
      if (response.data["message"] === "new") {
        store.addNotification({
          title: "승인 신청 완료!",
          message: "관리자 승인 후 Comet을 이용하실 수 있어요!",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "slideInRight"],
          animationOut: ["animated", "slideOutRight"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      } else if (
        response.data["confirm"] === false &&
        response.data["message"] === "exist"
      ) {
        store.addNotification({
          message: "이미 승인 신청이 되어있어요!",
          type: "warning",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "headShake"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true,
          },
        });
      }
      // else {
      //   store.addNotification({
      //     title: "승인 신청 실패!",
      //     message: "존재하지 않는 GitHub 아이디 입니다.",
      //     type: "danger",
      //     insert: "top",
      //     container: "top-right",
      //     animationIn: ["animated", "headShake"],
      //     animationOut: ["animated", "headShake"],
      //     dismiss: {
      //       duration: 5000,
      //       onScreen: true,
      //     },
      //   });
      // }

      if (
        response.data["confirm"] === true &&
        response.data["message"] === "exist"
      ) {
        store.addNotification({
          title: "승인 완료!",
          message: "이제 Comet을 이용해볼까요?",
          type: "info",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "slideInRight"],
          animationOut: ["animated", "slideOutRight"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
        localStorage.setItem("userId", response.data["id"]);
        history.push("/");
      }
    } catch (error) {
      return error;
    }
  });

  const onIdChange = (e) => {
    setId(e.target.value);
    if (e.target.value.length >= 4) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <>
      <GitHubAuth
        disable={disable}
        id={id}
        name={name}
        setName={setName}
        onIdChange={onIdChange}
        requestHandleRegister={requestHandleRegister}
      />
    </>
  );
});

export default GitHubAuthContainer;
