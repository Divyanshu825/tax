import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Banner.css';
import pic from '../../../../Images/bgImage.jpg';
import pic2 from '../../../../Images/user.jpeg';
import pic3 from '../../../../Images/Contact4.jpg';





const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '20rem'
}

const slideImages = [
  {
    url: pic,
    caption: 'Welcome To Dream Sakar'
  },
  {
    url: pic2,
    caption: 'Can You Find Job'
  },
  {
    url: pic3,
    caption: 'Slide 3'
  },
];
// const slideImages = [
//   {
//     url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//     caption: 'Welcome To Dream Sakar'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
//     caption: 'Can You Find Job'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//     caption: 'Slide 3'
//   },
// ];

const Banner = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index} >
            <img src={slideImage.url} alt="" style={{
              width: '1600px',
              height: '700px'
            }} />
            {/* <div className='divStyle' style={{ 'backgroundImage': `url(${slideImage.url})` }}>
              <span className='spanStyle'>{slideImage.caption}</span>
            </div> */}
          </div>
        ))}
      </Slide>
    </div>
  )
}
export default Banner