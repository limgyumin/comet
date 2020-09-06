import React from "react";
import "./App.css";
import Register from "./components/Register";
import Main from "./components/Main";
import userIdVerification from "./lib/userIdVerification";
import { BrowserRouter, Route, Redirect, Router } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
