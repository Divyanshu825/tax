import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


import Home from './page/home/Home';
import Contact from './page/contact/Contact';
import Service from './page/services/Service';
import OurClient from './page/ourclient/OurClient';
import Jobs from './page/jobs/Jobs';
import Navbar from './component/navbar/Navbar';




const App = () => {
 

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/client" element={<OurClient />} />
        <Route path="/job" element={<Jobs />} />
        

      </Routes>
     </Router>
    </>
  );
};



export default App;
