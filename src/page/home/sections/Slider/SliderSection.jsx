import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './SliderSection.css'

// import required modules
import { Pagination } from 'swiper/modules';
import SliderSectionData from './SliderSectionData';


const SliderSection = () => {
    return (
        <div className='SliderSection_container'>
            <div className='SliderSection_Main'>
                <header className="SliderSection_header " >
                    <h1>Blog Section</h1>
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

                >
                    {
                        SliderSectionData.map((item) => {
                            return (
                                <SwiperSlide className='SliderSection-swiper-slide' style={{ backgroundColor: 'aliceblue' }}>
                                    <div className='SwiperSlide_Content'>
                                        <h1>{item.head}</h1>
                                        <p>
                                            {item.title}
                                        </p>
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
