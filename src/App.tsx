// Core
import Layout from "./component/Layout/Layout";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

// Components
import Navbar from "./component/Layout/Navbar";

// Pages
import Home from "./pages/Home";
import Components from "./pages/Components";
import Exams from "./pages/Exams";
import Graphql from "./pages/Graphql";
import ReactHooks from "./pages/ReactHooks";
import Redux from "./pages/Redux";

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
            <Route path="/exams" element={<Exams />} />
            <Route path="/graphql" element={<Graphql />} />
            <Route path="/hooks" element={<ReactHooks />} />
            <Route path="/redux" element={<Redux />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
