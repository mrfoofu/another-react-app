// Core
import Layout from "./component/Layout/Layout";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Components from "./pages/Components";
import Navbar from "./component/Layout/Navbar";

import Exam from "./component/Functions/Exam";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/components" element={<Components />} />
        </Routes>
      </BrowserRouter>
      <Exam />
    </Layout>
  );
}

export default App;
