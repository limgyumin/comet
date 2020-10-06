import React from "react";
import "../styles/App.scss";
import userIdVerification from "../lib/userIdVerification";
import { Switch, Route, Redirect } from "react-router-dom";
import * as Pages from "pages";

function App() {
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact={true}
          render={() => {
            return userIdVerification() ? (
              <Pages.MainPage />
            ) : (
              <Redirect to={"/login"} />
            );
          }}
        />
        <Route path="/login" render={() => <Pages.RegisterPage />} />
        <Route path="/auth" render={() => <Pages.GitHubAuthPage />} />
      </Switch>
    </>
  );
}

export default App;
