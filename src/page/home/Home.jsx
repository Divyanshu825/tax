import React, { forwardRef } from 'react'
import './Home.css'
import Banner from './sections/banner/Banner'
import Faqs from './sections/Faqs/Faq'
import About from './sections/About/About'
import ProfileCard from './sections/ProfileCard/ProfileCard'
import GoogleMap from './sections/GoogleMap/GoogleMap'
import SliderSection from './sections/Slider/SliderSection'


const Home = forwardRef((props, ref) => {
    return (
        <div className='home' id="home-section" ref={ref}>
            <Banner />
            <div className='Overlay'>
                <About />
                <ProfileCard />
                <Faqs />
                <SliderSection/>
                <GoogleMap />
            </div>
        </div>
    )
})

export default Home