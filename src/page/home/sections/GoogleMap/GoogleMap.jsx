import React, { useEffect } from 'react'
import './GoogleMap.css';
import AOS from "aos";

const GoogleMap = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 2500,
            easing: "ease-in-out-cubic",
        });
    }, []);

    return (
        <div className='GoogleMap_container'>
            <div className="GoogleMap_header" >
                <h1 data-aos="zoom-in" data-aos-duration="2000">EXPLORE PUNYARTH ON GOOGLE MAP</h1>
                <p></p>
            </div>

            <div className='GoogleMap_Main' data-aos="fade-right" data-aos-duration="2000">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                    frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
                </iframe>

            </div>
        </div>
    )
}

export default GoogleMap