import React, { forwardRef } from 'react'
import './Home.css'
import Banner from './sections/banner/Banner'
import Faqs from './sections/Faqs/Faq'
import About from './sections/About/About'
import GoogleMap from './sections/GoogleMap/GoogleMap'
import SliderSection from './sections/Slider/SliderSection'
import JobSeeker from './sections/JobSeeker/JobSeeker'
import Cards from './sections/cards/Cards'
import Description from './sections/description/Description'
import Client from './sections/client/Client'
import Blogs from './sections/blogs/Blogs'
import Ourservices from './sections/ourservices/Ourservices'


const Home = forwardRef((props, ref) => {
    return (
        <div className='home' id="home-section" ref={ref}>
            <Banner />
            <div className='Overlay_Pages'>
                <div className='Overlay'>
                    <Cards />
                    <Description />
                    <Faqs />
                    <About />
                    <Client />
                    {/* <SliderSection /> */}
                    <JobSeeker />
                    <Ourservices />
                    <Blogs />
                    <GoogleMap />
                </div>
            </div>
        </div>
    )
})

export default Home