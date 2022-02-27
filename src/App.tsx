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
      <h1 className="py-3 font-bold sm:py-4 md:py-5 text-5xl">Nothing here</h1>
    </Layout>
  );
}

export default App;
