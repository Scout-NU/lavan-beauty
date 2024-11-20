import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>

          {/* Dropdown */}
          <li className="nav-item dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              About Us
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/about-us/mission">Mission</Link>
                </li>
                <li>
                  <Link to="/about-us/founder">Founder</Link>
                </li>
                <li>
                  <Link to="/about-us/values">Values</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
