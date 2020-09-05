import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { token } from "../../config/config.json";
import { HttpLink } from "apollo-link-http";
import { setContext } from "@apollo/link-context";

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

export default client;
