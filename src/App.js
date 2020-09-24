import React, { useEffect } from "react";
import "./App.css";
import Register from "./components/Register";
import Main from "./components/Main";
import userIdVerification from "./lib/userIdVerification";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route
        path="/main"
        render={() => {
          return userIdVerification() ? <Main /> : <Redirect to={"/"} />;
        }}
      />
      <Route
        path="/"
        render={() => {
          return userIdVerification() ? (
            <Redirect to={"/main"} />
          ) : (
            <Register />
          );
        }}
        exact={true}
      />
    </Switch>
  );
}

export default App;
