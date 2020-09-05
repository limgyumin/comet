import React from "react";
import "./App.css";
import Register from "./components/Register";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Register} />
    </BrowserRouter>
  );
}

export default App;
