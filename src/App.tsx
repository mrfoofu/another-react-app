// Core
import Layout from "./component/Layout/Layout";
import { Route, Routes } from "react-router";
import { Link, BrowserRouter } from "react-router-dom";

import Components from "./pages/Components";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <Layout>
      <h1>App</h1>
      <hr />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/components" element={<Components />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
