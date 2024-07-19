import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Banner.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import BannerData from './BannerData';


const Banner = () => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper Banner_swiper"
            >
                {
                    BannerData.map((item) => {
                        return (
                            <SwiperSlide className='Banner_swiper-slide'>
                                <p className='content'>{item.title}</p>
                                <img src={item.img} />
                            </SwiperSlide>
                        )
                    })
                }


            </Swiper>
        </>
    );
}

export default Banner