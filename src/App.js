import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="projects" element={<Projects />} />
          <Route path="/projects/:productId" element={<SingleProject />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
