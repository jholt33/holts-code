import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import MainNav from "./components/MainNav";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";

function App() {
  return (
    <div>
      <MainNav />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />}>
              <Route path="projects/:detailsId" element={<SingleProject />} />
            </Route>
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
