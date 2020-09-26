import React from "react";
import "./App.css";
import Main from "./components/Main";
import userIdVerification from "./lib/userIdVerification";
import { Switch, Route, Redirect } from "react-router-dom";
import * as Pages from "./pages";
import GitHubAuth from "./components/GitHubAuth/GitHubAuth";
import GitHubSuccess from "components/GitHubSuccess";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" render={() => <Pages.RegisterPage />} />
        <Route
          path="/"
          exact={true}
          render={() => {
            return userIdVerification() ? <Main /> : <Redirect to={"/login"} />;
          }}
        />
        <Route path="/auth" render={() => <GitHubAuth />} />
        <Route path="/success" render={() => <GitHubSuccess />} />
      </Switch>
    </>
  );
}

export default App;
