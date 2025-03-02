import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './page/home/Home';
import Service from './page/services/Service';
import OurClient from './page/ourclient/OurClient';
import Jobs from './page/jobs/Jobs';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import About from './page/About/About';
// import Test from './page/home/sections/Test/Test';
import Contact2 from './page/contact/Contact2';
import IncomeTax from './page/IncomeTax/IncomeTax';
import Gst from './page/gst/Gst';
import Images from './page/Images/Images';
import Login from './page/login/Login.jsx';
import Signup from './page/signup/Signup.jsx';
import Dashboard from './admin/dashboard/Dashboard.jsx';
import Admin from './admin/Admin.jsx';
import AddProduct from './admin/addproduct/AddProduct.jsx';
import AddGstBlog from './admin/GstBlogs/AddGstBlog/AddGstBlog.jsx';
import AllGstBlog from './admin/GstBlogs/AllGstBlog/AllGstBlog.jsx';
import AllIncomeTaxBlog from './admin/IncomeTaxBlog/AllIncomeTaxBlog/AllIncomeTaxBlog.jsx';
import AddIncomeTaxBlog from './admin/IncomeTaxBlog/AddIncomeTaxBlog/AddIncomeTaxBlog.jsx';
import AllService from './admin/adminService/AllService/AllService.jsx';
import AddService from './admin/adminService/AddService/AddService.jsx';


const App = () => {

  return (
    <div>
      <Router>
        
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/client" element={<OurClient />} />
          <Route path="/job" element={<Jobs />} /> 
          <Route path="/incomeTax" element={<IncomeTax />} /> 
          <Route path="/gst" element={<Gst />} /> 
          <Route path="/images" element={<Images />} /> 
          <Route path="/contact" element={<Contact2 />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-pannel/addproduct" element={<AddProduct />} />
          <Route path="/admin-pannel/AddGstBlog" element={<AddGstBlog />} />
          <Route path="/admin-pannel/AllGstBlog" element={<AllGstBlog />} />
          <Route path="/admin-pannel/AddIncomeTaxBlog" element={<AddIncomeTaxBlog />} />
          <Route path="/admin-pannel/AllIncomeTaxBlog" element={<AllIncomeTaxBlog />} />

          <Route path="/admin-pannel/AllService" element={<AllService />} />
          <Route path="/admin-pannel/AddService" element={<AddService />} />

          
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
