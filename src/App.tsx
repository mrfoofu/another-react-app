// Core
import Layout from "./component/Layout/Layout";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Components from "./pages/Components";
import Code from "./pages/Code";
import Navbar from "./component/Layout/Navbar";
import Home from "./pages/Home";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

// Initialize ApolloClient, passing its constructor a configuration object with uri and cache fields:
const client = new ApolloClient({
  uri: 'https://71z1g.sse.codesandbox.io/',
  cache: new InMemoryCache()
});

function App() {
  return (
    // You connect Apollo Client to React with the ApolloProvider component.
    // Similar to React's Context.Provider, ApolloProvider wraps your React app and places Apollo Client on the context,
    // which enables you to access it from anywhere in your component tree.
    
    <ApolloProvider client={client}>
      <Layout>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/code" element={<Code />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
