import React, { useEffect } from 'react'
import './About.css';
import AOS from "aos";


const About = () => {
  useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 2500,
        easing: "ease-in-out-cubic",
    });
}, []);

  return (
    <div className="AboutSection_Container">
      <div className='AboutSection_Main'>
        <header className="AboutSection_header " >
          <h1 data-aos="zoom-in" data-aos-duration="2000" >About Us</h1>
          {/* <p className='AboutSection_Underline'>---------------------------------------------</p> */}
        </header>

        <div className='AboutSection_Content' data-aos="zoom-in" data-aos-duration="2000">
          <p>We are a Prime Executive Search Firm working with an objective to cater training solutions and all the end to end recruitment needs of our esteemed clients. Based at Indore, Madhya Pradesh, the company has moved up in value chain as one of the preferential recruiters, for top companies PAN India.</p>
        </div>

        <main>
          <div className="info-section" data-aos="zoom-in" data-aos-duration="2000">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d="M8 17l4 4 4-4m-4-5v9"></path>
              <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
            </svg>
            <h2>Total Countries</h2>
            <p>150+</p>
          </div>
          <div className="info-section" data-aos="zoom-in" data-aos-duration="2000">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
            </svg>

            <h2>Total Users</h2>
            <p>4000</p>
          </div>
          <div className="info-section" data-aos="zoom-in" data-aos-duration="2000">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d="M3 18v-6a9 9 0 0118 0v6"></path>
              <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
            </svg>

            <h2>Total Products</h2>
            <p>4000+</p>
          </div>
          <div className="info-section" data-aos="zoom-in" data-aos-duration="2000">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <h2>Total Date Varieties</h2>
            <p>45</p>
          </div>
        </main>

      </div>
    </div>
  )
}

export default About