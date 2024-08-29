import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './SliderSection.css'
import AOS from "aos";

// import required modules
import { Pagination } from 'swiper/modules';
import SliderSectionData from './SliderSectionData';
import pic3 from '../../../../Images/Logo.jpg'


const SliderSection = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 2500,
            easing: "ease-in-out-cubic",
        });
    }, []);

    return (
        <div className='SliderSection_container'>
            <div className='SliderSection_Main'>
                <header className="SliderSection_header " >
                    <h1 data-aos="fade-left" data-aos-duration="2000">Blog Section</h1>
                    {/* <p className='AboutSection_Underline'>---------------------------------------------</p> */}
                </header>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="SliderSection-swiper"
                    data-aos="fade-left" data-aos-duration="2000"
                >
                    {
                        SliderSectionData.map((item) => {
                            return (
                                <SwiperSlide className='SliderSection-swiper-slide'
                                    style={{ backgroundColor: 'aliceblue' }}
                                >
                                    <div className="Test_container">
                                        <img src={pic3} alt="Avatar" className="Test_image" />
                                        <div className="Test_overlay">
                                            <div className="Test_text">Hello World</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </div>
    );
}
export default SliderSection
