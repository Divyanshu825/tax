import React, { forwardRef } from 'react'
import './Home.css'
import Banner from './sections/banner/Banner'
import Faqs from './sections/Faqs/Faq'


const Home = forwardRef((props, ref) => {
    return (
        <div className='home' id="home-section" ref={ref}>
            <Banner />
            
            <Faqs />
        </div>
    )
})

export default Home