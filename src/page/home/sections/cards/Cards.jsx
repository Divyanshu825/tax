import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Cards.css';
import pic from '../../../../Images/bg5.jpg'
import pic1 from '../../../../Images/bg7.jpg'
import pic2 from '../../../../Images/bg8.jpg'
import { FaCheckToSlot } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import { GoGoal } from "react-icons/go";

const Cards = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const card = [
        {
            title: 'About Us',
            description: 'This is the third card This is the third card This is the third card',
            image: pic,
            readMore: 'Read More',
            icon: <FaCheckToSlot />
        },
        {
            title: 'Clientele',
            description: 'This is the third card This is the third card This is the third card',
            image: pic1,
            readMore: 'Read More',
            icon: <TbBulbFilled />
        },
        {
            title: 'Jobseeker',
            description: 'This is the third card This is the third card This is the third card',
            image: pic2,
            readMore: 'Read More',
            icon: <GoGoal />
        },
    ];

    return (
        <div className="card-slider">
            {/* Large screens: Show cards directly */}
            <div className="desktop-cards">
                {card.map((card, index) => (
                    <div key={index} className="card">
                        <div className="card-image">
                            <img src={card.image} alt={card.title} />
                            <div className="overlay">
                                <div className="overlay-text">
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                    <button>{card.readMore}</button>
                                </div>
                            </div>
                        </div>
                        <div className='bottom'>
                            <div className='icon'>
                                {card.icon}
                            </div>
                            <p>{card.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Small screens: Show cards in slider */}
            <div className="mobile-slider">
                <Slider {...settings}>
                    {card.map((card, index) => (
                        <div key={index} className="card">
                            <div className="card-image">
                                <img src={card.image} alt={card.title} />
                                <div className="overlay">
                                    <div className="overlay-text">
                                        <h3>{card.title}</h3>
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bottom'>
                                <p>Divyanshu</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Cards;
