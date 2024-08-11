import React from 'react'
import './Test.css';
import pic from '../../../../Images/Bg.jpg';

const Test = () => {
  return (
    <div className="Test_container">
      <img src={pic} alt="Avatar" className="Test_image"/>
        <div className="Test_overlay">
          <div className="Test_text">Hello World</div>
        </div>
    </div>
  )
}

export default Test