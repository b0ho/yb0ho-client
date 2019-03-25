import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://yb0ho-server.herokuapp.com"
});

export default client;
