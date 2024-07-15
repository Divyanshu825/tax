import React, { forwardRef } from 'react'
import Banner from './component/banner/Banner'
import './Home.css'


const Home = forwardRef((props, ref) => {
    return (
        <div className='home' id="home-section" ref={ref}>
            <Banner />
            
        </div>
    )
})

export default Home