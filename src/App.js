import React from "react";
import "./App.css";
import Register from "./components/Register";
import Main from "./components/Main";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Register} />
      <Route path="/main" component={Main} />
    </BrowserRouter>
  );
}

export default App;
