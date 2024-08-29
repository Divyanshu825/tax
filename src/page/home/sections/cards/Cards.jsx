import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Cards.css';
import pic from '../../../../Images/bg5.jpg'
import pic1 from '../../../../Images/bg7.jpg'
import pic2 from '../../../../Images/bg8.jpg'

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
            title: 'Card 1',
            description: 'This is the first card',
            image: pic,
        },
        {
            title: 'Card 2',
            description: 'This is the second card',
            image: pic1,
        },
        {
            title: 'Card 3',
            description: 'This is the third card',
            image: pic2,
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
                                </div>
                            </div>
                        </div>
                        <div className='bottom'>
                            <p>Divyanshu</p>
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
