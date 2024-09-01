// src/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Images/logoImg.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <ul className={`links ${isOpen ? 'open' : ''}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/service">Service</a></li>
                    <li><a href="/client">OurClient</a></li>
                    <li><a href="/job">Jobs</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/test">Test</a></li>
                    <li><a href="/temp">Temp</a></li>
                </ul>
                <a href="/" className="action_btn">Get Started</a>
                <div className="toggle_btn" onClick={toggleNavbar}>
                    <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                </div>
            </div>
            {isOpen && (
                <div className="dropdown_menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/service">Service</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/" className="action_btn">Get Started</a></li>
                </div>
            )}
        </header>
    );
};

export default Navbar;
