import React from 'react'
import './JobSeeker.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination } from 'swiper/modules';

const JobSeeker = () => {
    return (
        <div className="JobSeeker_Container">
            <div className="JobSeeker_overLay">
                <div className="JobSeeker_overLay">
                    <div className='JobSeeker_Main'>
                        <header className="JobSeeker_header " >
                            <h1 data-aos="zoom-in" data-aos-duration="2000" >Job Seeker </h1>
                            <p></p>
                        </header>
                        <div className='JobSeeker_Content' data-aos="zoom-in" data-aos-duration="2000">
                            <p>Please post your updated resume here, for the current and / or future openings with our client companies. We maintain our separate in-house database of resumes of all categories.</p>
                            <p>Please post your updated resume here, for the current and / or future openings with our client companies. We maintain our separate in-house database of resumes of all categories.</p>
                            <p>Please post your updated resume here, for the current and / or future openings with our client companies. We maintain our separate in-house database of resumes of all categories.</p>
                            <p>Please post your updated resume here, for the current and / or future openings with our client companies. We maintain our separate in-house database of resumes of all categories.</p>
                            <p>Please post your updated resume here, for the current and / or future openings with our client companies. We maintain our separate in-house database of resumes of all categories.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobSeeker

{/* <Swiper
                    slidesPerView={3}
                    grid={{
                        rows: 2,
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    className="JobSeeker_swiper"
                >
                    <SwiperSlide className='JobSeeker_swiper-slide '>Slide 1</SwiperSlide>
                    <SwiperSlide className='JobSeeker_swiper-slide '>Slide 2</SwiperSlide>
                    <SwiperSlide className='JobSeeker_swiper-slide '>Slide 3</SwiperSlide>
                    <SwiperSlide className='JobSeeker_swiper-slide '>Slide 4</SwiperSlide>
                    <SwiperSlide className='JobSeeker_swiper-slide '>Slide 5</SwiperSlide>
                    <SwiperSlide className='JobSeeker_swiper-slide '>Slide 6</SwiperSlide>
                    <SwiperSlide className='JobSeeker_swiper-slide '>Slide 7</SwiperSlide>
                    <SwiperSlide className='JobSeeker_swiper-slide '>Slide 8</SwiperSlide>
                    <SwiperSlide className='JobSeeker_swiper-slide '>Slide 9</SwiperSlide>
                    <SwiperSlide className='JobSeeker_swiper-slide '>Slide 10</SwiperSlide>
                </Swiper> */}