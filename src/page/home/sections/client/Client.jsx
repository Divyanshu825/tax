// Client.js
import React from "react";
import Slider from "react-slick";
import "./Client.css";
import logo from '../../../../Images/logoImg.png';

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide arrows
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const items = [
    {
      icon: logo,
      text: 'Welcome to our website!'
    },
    {
      icon: logo,
      text: "Discover amazing content.",
    },
    {
      icon: logo,
      text: "Stay updated with the latest news.",
    },
    {
      icon: logo,
      text: "Contact us for more information.",
    },
    {
      icon: logo,
      text: "Enjoy your visit!",
    },
  ];

  return (
    <div className="text-carousel-container">
      <div className="text-carousel-main">

        <div className="text-carousel-main">
          <header className="Client_header" >
            <h1 data-aos="zoom-in" data-aos-duration="2000">Clientele</h1>
            <p></p>
          </header>

          <Slider {...settings}>
            {items.map((text, index) => (
              <div key={index} className="text-carousel-item">
                <img src={text.icon} alt="" />
                <p>{text.text}</p>
              </div>
            ))}
          </Slider>


          <div className="service_list_container">
            <div className="service_list_first">
              <div className="list_head">
                <h1>Banking / Securities</h1>
                <div className="service_list">
                  <li>ICICI Securities</li>
                  <li>Kotak Securities</li>
                  <li>HDFC Sales</li>
                  <li>ING Vysya</li>
                  <li>Reliance Securities</li>
                </div>
              </div>
            </div>

            <div className="service_list_second">
              <div className="list_head">
                <h1>Banking / Securities</h1>
                <div className="service_list">
                  <li>ICICI Prudential Life Insurance</li>
                  <li>Birla Sun Life Insurance</li>
                  <li>Kotak Life Insurance</li>
                  <li>HDFC Life Insurance</li>
                  <li>Met Life Insurance</li>
                  <li>Bharti AXA</li>
                  <li>Future Generali</li>
                </div>
              </div>
            </div>

            <div className="service_list_third">
              <div className="list_head">
                <h1>Banking / Securities</h1>
                <div className="service_list">
                  <li>Mittal Corp</li>
                  <li>Guruji Products</li>
                  <li>Capital Aim</li>
                  <li>LMS Inida</li>
                  <li>Synoris Technologies</li>
                  <li>Radisson Blu</li>
                  <li>Covetus Technologies</li>
                  <li>Future Technologies</li>
                  <li>Stellar Furniture</li>
                  <li>Systematix Infotech</li>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
