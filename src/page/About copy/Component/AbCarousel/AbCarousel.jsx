import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AboutList_images } from './AboutImages';
import './AbCarousel.css'

const AbCarousel = () => {
    return (
        <div>
            <div className='Carousel'>
                <Carousel  className='Carousel2'>
                    {
                        AboutList_images.map((item) => {
                            return (
                                <div >
                                    <img src={item.pic} />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default AbCarousel