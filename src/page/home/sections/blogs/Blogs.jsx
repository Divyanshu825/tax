import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Blogs.css';
import pic from '../../../../Images/bg5.jpg'
import pic1 from '../../../../Images/bg7.jpg'
import pic2 from '../../../../Images/bg8.jpg'

const Blogs = () => {
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
    // <div className="blogs_container">
      <div className="blogs_card-slider">
        {/* Large screens: Show cards directly */}
        <div className="blogs_desktop-cards">
          {card.map((card, index) => (
            <div key={index} className="blogs_card">
              <div className="blogs_card-image">
                <img src={card.image} alt={card.title} />
                <div className="blogs_overlay">
                  <div className="blogs_overlay-text">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
              <div className='blogs_bottom'>
                <p>What We are capableto usuall</p>
              </div>
              <div className="blogs_description">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ratione expedita minima asperiores, voluptate optio ea, soluta temporibus velit molestias quidem corporis ex possimus eaque? Minima pariatur optio obcaecati dolorum!</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>

        {/* Small screens: Show cards in slider */}
        <div className="blogs_mobile-slider">
          <Slider {...settings}>
            {card.map((card, index) => (
              <div key={index} className="blogs_card">
                <div className="blogs_card-image">
                  <img src={card.image} alt={card.title} />
                  <div className="blogs_overlay">
                    <div className="blogs_overlay-text">
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </div>
                </div>
                <div className='blogs_bottom'>
                  <p>What We are capableto usuall</p>
                </div>
                <div className="blogs_description">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ratione expedita minima asperiores, voluptate optio ea, soluta temporibus velit molestias quidem corporis ex possimus eaque? Minima pariatur optio obcaecati dolorum!</p>
                  <button>Read More</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    // </div>

  );
};

export default Blogs;
