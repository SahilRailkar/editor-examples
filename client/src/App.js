// Uncomment the editor you would like to see

import Editor from './components/TipTap/TipTap';
// import Editor from './components/Draft/Draft';
// import Editor from './components/Slate/MySlate';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }) => console.log(message));
  }
});

const link = from([
  errorLink,
  new HttpLink({uri: "http://localhost:8000/graphql"}),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Editor />
      </div>
    </ApolloProvider>
  );
}

export default App;
