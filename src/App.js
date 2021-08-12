import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import RickAndMortyContainer from "./containers/RickAndMortyContainer";
function App() {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
  });
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <main>
          <RickAndMortyContainer />
        </main>
      </ApolloProvider>
    </div>
  );
}

export default App;
