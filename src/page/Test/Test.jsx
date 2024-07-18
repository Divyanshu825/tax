import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './Test.css';

// import required modules
import { Grid, Pagination } from 'swiper/modules';

export default function Test() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="Test_swiper"
      >
        <SwiperSlide className='Test_swiper-slide '>Slide 1</SwiperSlide>
        <SwiperSlide className='Test_swiper-slide '>Slide 2</SwiperSlide>
        <SwiperSlide className='Test_swiper-slide '>Slide 3</SwiperSlide>
        <SwiperSlide className='Test_swiper-slide '>Slide 4</SwiperSlide>
        <SwiperSlide className='Test_swiper-slide '>Slide 5</SwiperSlide>
        <SwiperSlide className='Test_swiper-slide '>Slide 6</SwiperSlide>
        <SwiperSlide className='Test_swiper-slide '>Slide 7</SwiperSlide>
        <SwiperSlide className='Test_swiper-slide '>Slide 8</SwiperSlide>
        <SwiperSlide className='Test_swiper-slide '>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
