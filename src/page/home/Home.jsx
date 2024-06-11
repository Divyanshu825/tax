import React, { forwardRef } from 'react'
import Banner from './component/banner/Banner'
import 'D:/Dreamsakar/src/page/home/Home.css'


const Home = forwardRef((props, ref) => {
    return (
        <div className='home' id="home-section" ref={ref}>
            <Banner />
            
        </div>
    )
})

export default Home