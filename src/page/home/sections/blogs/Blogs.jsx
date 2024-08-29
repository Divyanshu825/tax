// BlogSection.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Blogs.css';

const Blogs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const blogs = [
    {
      title: "Blog 1",
      description: "This is the first blog. It's a bit longer to show the effect of the 'Read More' button.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Blog 2",
      description: "This is the second blog. The content is concise.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Blog 3",
      description: "This is the third blog. It also has a longer description to illustrate the 'Read More' button.",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="blog-section">
      <Slider {...settings}>
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Blogs;
