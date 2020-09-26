import React from "react";
import "./App.css";
import Register from "./components/Register";
import Main from "./components/Main";
import userIdVerification from "./lib/userIdVerification";
import { Switch, Route, Redirect } from "react-router-dom";
import * as Pages from "./pages";

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
        <Route path="/auth" render={() => {}} />
      </Switch>
    </>
  );
}

export default App;
