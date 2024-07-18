import React, { forwardRef } from 'react'
import './Home.css'
import Banner from './sections/banner/Banner'
import Faqs from './sections/Faqs/Faq'
import About from './sections/About/About'
import ProfileCard from './sections/ProfileCard/ProfileCard'
import GoogleMap from './sections/GoogleMap/GoogleMap'
import SliderSection from './sections/Slider/SliderSection'
import JobSeeker from './sections/JobSeeker/JobSeeker'


const Home = forwardRef((props, ref) => {
    return (
        <div className='home' id="home-section" ref={ref}>
            <Banner />
            <div className='Overlay_Pages'>
                <div className='Overlay'>
                    <ProfileCard />
                    <About />
                    <Faqs />
                    <SliderSection />
                    <JobSeeker />
                    <GoogleMap />
                </div>
            </div>
        </div>
    )
})

export default Home