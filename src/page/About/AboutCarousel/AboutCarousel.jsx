import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './AboutCarousel.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const AboutCarousel = () => {
    const image = [
        {
            img: "https://swiperjs.com/demos/images/nature-1.jpg"
        },
        {
            img: "https://swiperjs.com/demos/images/nature-2.jpg"
        },
        {
            img: "https://swiperjs.com/demos/images/nature-3.jpg"
        },
        {
            img: "https://swiperjs.com/demos/images/nature-4.jpg"
        },
        {
            img: "https://swiperjs.com/demos/images/nature-5.jpg"
        },
        {
            img: "https://swiperjs.com/demos/images/nature-6.jpg"
        },
        {
            img: "https://swiperjs.com/demos/images/nature-7.jpg"
        },
        {
            img: "https://swiperjs.com/demos/images/nature-8.jpg"
        },
        {
            img: "https://swiperjs.com/demos/images/nature-9.jpg"
        },
    ]
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="AboutCarousel-swiper"
            >
                {
                    image.map((img) => {
                        return (
                            <SwiperSlide className='AboutCarousel-swiper-slide'>
                                <img src={img.img} />
                            </SwiperSlide>
                        )
                    })
                }

                {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
            </Swiper>
        </>
    );
}

export default AboutCarousel