import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../src/components/Header";
import Abaut from "./components/Abaut";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Home from "./components/Home";

function App() {


  return (
    <>
      <Router>
        <Header />
        <div className="container mx-auto p-10 rounded ">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/abaut" element={<Abaut />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;


