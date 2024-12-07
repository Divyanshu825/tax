// src/Footer.js
import React from 'react';
import './Footer.css';
import Instagram from '../../Images/instagram.svg'
import Facebook from '../../Images/Facebook.svg'
import linkedin from '../../Images/linkedin.svg'

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
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="/client">OurClient</a></li>
            <li><a href="/job">Job Seekers </a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: dreamsakar@gmail.com</p>
          <p>Phone: +91 8085527753</p>
          <div className="social-icons">
            <a href="#twitter" className="social-icon">
              <img src={Instagram} alt="" style={{
                height: '40px'
              }} />
            </a>
            <a href="#facebook" className="social-icon">
              <img src={Facebook} alt="" style={{
                height: '40px'
              }} />
            </a>
            <a href="#instagram" className="social-icon">
              <img src={Instagram} alt="" style={{
                height: '40px'
              }} />
            </a>
            <a href="#linkedin" className="social-icon">
              <img src={linkedin} alt="" style={{
                height: '35px'
              }} />
            </a>

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
