import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu"; // Ensure this path matches where your Menu component is located
import Footer from "./components/Footer"; // Ensure this path matches where your Footer component is located
import Home from "./pages/Home"; // Ensure this path matches where your Home component is located
import About from "./pages/About"; // Ensure this path matches where your About component is located
import Pictures from "./pages/Pictures"; // Ensure this path matches where your Pictures component is located
import "./App.css"; // This imports your CSS styles

function App() {
  return (
    <Router>
      <div className="site-container">
        <header className="site-header">
          <Menu />
        </header>
        <main className="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pictures" element={<Pictures />} />
          </Routes>
        </main>
        <footer className="site-footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
