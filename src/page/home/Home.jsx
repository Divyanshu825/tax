import React, { forwardRef } from 'react'
import Banner from './component/banner/Banner'
import './Home.css'
import Faqs from './component/faqs/Faqs'


const Home = forwardRef((props, ref) => {
    return (
        <div className='home' id="home-section" ref={ref}>
            <Banner />
            <Faqs/>
        </div>
    )
})

export default Home