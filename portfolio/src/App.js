import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" elements={<Home />}></Route>
          <Route path="/projects" elements={<Projects />}></Route>
          <Route path="/experience" elements={<Experience />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
