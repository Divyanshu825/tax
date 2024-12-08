import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


import Home from './page/home/Home';
import Contact from './page/contact/Contact';
import Service from './page/services/Service';
import OurClient from './page/ourclient/OurClient';
import Jobs from './page/jobs/Jobs';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import About from './page/About/About';
import Test from './page/home/sections/Test/Test';
import Temp from './page/Test/Temp';
import Contact2 from './page/contact/Contact2';

const App = () => {

  return (
    <div>
      <Router>
        <Navbar />
        {/* <Temp /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/client" element={<OurClient />} />
          <Route path="/job" element={<Jobs />} />
          <Route path="/contact" element={<Contact2 />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/test" element={<Test />} />
          <Route path="/test" element={<Test />} />
          {/* <Route path="/temp" element={<Temp />} /> */}
        </Routes>

        <Footer />
        <button
          style={{
            position: 'fixed',
            bottom: 10,
            right: 10,
            backgroundColor: '#4277a8',
            border: 'none',
            boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
            borderRadius: 30,
            padding: 12,
            color: 'white',
          }}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}>
          +
          {/* <ArrowUpwardIcon /> */}
        </button>
      </Router>
    </div >
  );
};



export default App;
