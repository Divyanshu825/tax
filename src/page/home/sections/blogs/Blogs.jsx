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
      description: 'संगीता गुप्ता बहुत प्यारी है I LOVE YOU ❤️',
      image: pic,
    },
    {
      title: 'Card 2',
      description: 'संगीता गुप्ता बहुत प्यारी है',
      image: pic1,
    },
    {
      title: 'Card 3',
      description: 'This is the third card',
      image: pic2,
    },
  ];

  return (
    <div className="blogs_container">
      <header className="blogs_header " >
        <h1 data-aos="zoom-in" data-aos-duration="2000" >Learn more from our Latest News And Updates
        </h1>
        <p></p>
      </header>
      <div className="Blogs_card-slider">

        {/* Large screens: Show cards directly */}

        <div className="Blogs_desktop-cards">
          {card.map((card, index) => (
            <div key={index} className="Blogs_card">
              <div className="Blogs_card-image">
                <img src={card.image} alt={card.title} />
                <div className="Blogs_overlay">
                  <div className="Blogs_overlay-text">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
              <h2>Learn more from our Latest News</h2>
              <div className='Blogs_bottom'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quidem recusandae voluptate! Sed velit recusandae, ullam rem ratione sequi fuga, nulla quam suscipit natus, id in numquam corporis omnis harum?</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>

        {/* Small screens: Show cards in slider */}

        <div className="mobile-slider">
          <Slider {...settings}>
            {card.map((card, index) => (
              <div key={index} className="Blogs_card">
                <div className="Blogs_card-image">
                  <img src={card.image} alt={card.title} />
                  <div className="Blogs_overlay">
                    <div className="Blogs_overlay-text">
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>

                  </div>
                </div>
                <h2>Learn more from our Latest News</h2>
                <div className='Blogs_bottom'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed explicabo soluta quibusdam, praesentium debitis nam officiis, quam labore id sunt saepe sint, ab commodi amet nobis perspiciatis necessitatibus. Assumenda.</p>
                  <button>Read More</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
