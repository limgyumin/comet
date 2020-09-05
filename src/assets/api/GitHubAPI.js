import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { token } from "../../config/config.json";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import { setContext } from "@apollo/link-context";
import UseAPI from "./UseAPI";

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
});

const GitHubAPI = () => {
  return (
    <ApolloProvider client={client}>
      <UseAPI />
    </ApolloProvider>
  );
};

export default GitHubAPI;
