import "./App.css";
import React, {useState, useEffect} from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectInfo from "./pages/ProjectInfo";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  // Toggle function to switch between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Effect to set the theme in localStorage and apply it to the body class
  useEffect(() => {
    document.body.className = theme; // Set body class to the current theme
    localStorage.setItem("theme", theme); // Store theme in local storage
  }, [theme]);

  // Effect to retrieve the theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);


  return (
    <div className="App">
      <Router>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/project/:id" element={<ProjectInfo />} />
          <Route path="/experience" element={<Experience />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
