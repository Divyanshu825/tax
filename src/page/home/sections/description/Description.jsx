import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import './Description.css';
import pic from '../../../../Images/bg10.jpg'



const Description = () => {
  return (
    <div className='Description_container'>
      <div className="Description_main">
        <div className="Description_left">
          <h1>Dear Job Seeker</h1>
          <h4>Welcome To Fortune Shapers</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi quisquam quam, tempore nemo temporibus distinctio ullam aliquid hic quis officiis, consectetur nihil cum quos amet culpa nam ad alias.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi quisquam quam, tempore nemo temporibus distinctio ullam aliquid hic quis officiis, consectetur nihil cum quos amet culpa nam ad alias.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi quisquam quam, tempore nemo temporibus distinctio ullam aliquid hic quis officiis, consectetur nihil cum quos amet culpa nam ad alias.</p>
        </div>
        <div className="Description_right">
          <img src={pic} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Description