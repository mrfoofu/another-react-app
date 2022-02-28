// Core
import Layout from "./component/Layout/Layout";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Components from "./pages/Components";
import Code from "./pages/Code";
import Navbar from "./component/Layout/Navbar";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/components" element={<Components />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
