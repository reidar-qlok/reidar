import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"; // Assuming you have a separate CSS file for menu styles

const Menu = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/pictures" className="nav-link">
            Pictures
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
