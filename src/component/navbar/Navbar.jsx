// src/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Images/LogoJPG.png';

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
                    {/* <li><a href="/client">OurClient</a></li> */}
                    <li><a href="/incomeTax">Income Tax</a></li>
                    <li><a href="/gst">GST</a></li>
                    {/* <li><a href="/images">Images</a></li> */}
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/Signup">SignUp</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/admin">Admin</a></li>
                </ul>
                <div className="toggle_btn" onClick={toggleNavbar}>
                    <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                </div>
            </div>
            {isOpen && (
                <div className="dropdown_menu">
                    <a href="/"><li>Home</li></a>
                    <a href="/about">
                        <li>
                            About
                        </li>
                    </a>
                    <a href="/service">
                        <li>
                            Service
                        </li>
                    </a>
                    <a href="/client">
                        <li>
                            OurClient
                        </li>
                    </a>
                    <a href="/job">
                        <li>
                            Jobs
                        </li>
                    </a>
                    <a href="/contact">
                        <li>
                            Contact
                        </li>
                    </a>
                    <a href="/images">
                        <li>
                            Images
                        </li>
                    </a>
                    <a href="/" className="action_btn">
                        <li>
                            Get Started
                        </li>
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
