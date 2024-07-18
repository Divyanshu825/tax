import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          {/* <a href="/">Logo</a> */}
          <h1>DreamSakar</h1>
        </div>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/client">Our Client</Link>
            </li>
            <li>
              <Link to="/job">Apply jobs</Link>
            </li>
            {/* <li>
              <Link to="/contact">Contact</Link>
            </li> */}
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`menu-icon ${isOpen ? 'open' : ''}`}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



{/* <li>
              <div className="product-dropdown">
                <div onClick={handleDropdownToggle} className="product-trigger">
                  Product <span className="dropdown-icon">▼</span>
                </div>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <a href="/product" className="dropdown-item">Millets</a>
                    
                  </div>
                )}
              </div>
            </li> */}