import React from "react";
import "./App.css";
import Main from "./components/Main";
import userIdVerification from "./lib/userIdVerification";
import { Switch, Route, Redirect } from "react-router-dom";
import * as Pages from "pages";
import GitHubAuth from "./components/GitHubAuth/GitHubAuth";
import GitHubSuccess from "components/GitHubSuccess";
import Register from "components/Register";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" render={() => <Register />} />
        <Route
          path="/"
          exact={true}
          render={() => {
            return userIdVerification() ? <Main /> : <Redirect to={"/login"} />;
          }}
        />
        <Route path="/auth" render={() => <GitHubAuth />} />
        <Route path="/success" render={() => <Pages.GitHubSuccessPage />} />
      </Switch>
    </>
  );
}

export default App;
