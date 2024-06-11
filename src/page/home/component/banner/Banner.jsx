import React from 'react'
import Video from '../../../../Video/video1.mp4';
import './Banner.css'
import { ReactTyped } from "react-typed";


const Banner = () => {
    const multilineText = `Hiii Custmor
    This Is puny
    Best Quality Products Available
    trusted`;
    return (
        <div className='main'>
            <div className="overlay"></div>
            <video src={Video} autoPlay loop muted />
            <div className="content">
                <h1>Hello Job Seekers</h1>
                {/* <ReactTyped strings={["Hello Customer"]}  /> */}
                <ReactTyped strings={["This is DreamSakar.com"]} typeSpeed={200} loop />
            </div>
           
            {/* <Animation/> */}
        </div>
    )
}

export default Banner