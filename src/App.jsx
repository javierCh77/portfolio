import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../src/components/Header";
import Abaut from "./components/Abaut";
import Blog from "./components/Blog";
import Proyects from "./components/Proyects";

function App() {


  return (
    <>
      <Router>
        <Header />
        <div className="container mx-auto p-10 rounded bg-teal-200">
          <Routes>
            <Route path="/" element={<Abaut />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/proyects" element={<Proyects />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;


