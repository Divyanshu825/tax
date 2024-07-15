// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We are a leading provider of stock market analysis and investment tips.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: dreamsakar@gmail.com</p>
          <p>Phone: +91 8085527753</p>
          <div className="social-icons">
            <a href="#facebook" className="social-icon">FB</a>
            <a href="#twitter" className="social-icon">TW</a>
            <a href="#linkedin" className="social-icon">LI</a>
            <a href="#instagram" className="social-icon">IG</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Stock Market. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
