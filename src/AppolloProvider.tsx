import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  // uri: process.env.REACT_APP_APOLLO_PROVIDER,
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

const Provider: React.FC<any> = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Provider;
