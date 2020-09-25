import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "mobx-react";
import * as serviceWorker from "./serviceWorker";
import stores from "./stores";
import client from "./assets/api/client";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={stores}>
      <React.StrictMode>
        <BrowserRouter>
          <ReactNotification />
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
