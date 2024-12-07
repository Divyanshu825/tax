import React, { useState } from 'react'
import './Jobs.css';
import { Grid, Stack, TextField, Typography } from '@mui/material';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { firdb } from '../../firebase';
import { toast } from 'react-toastify';


const Jobs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    carNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
    console.log("Form Data:", formData);
  };


  return (
    <div className="Jobs_Container">
      <div className="Jobs_head"  >
        <h1>Job Seekers</h1>
        <h2>Home / Job Seekers</h2>
      </div>

      <div className='Job_Center2'>
        <div className='Job_Center3'>
          <div className='Job_Des_head'>
            {/* <h2>HERE’S THE LIST OF OUR VALUABLE CLIENTS</h2> */}
            <h1>Dear Job Seekers</h1>
          </div>
          <div className='Job_Des_Content' >
            <p>Please post your updated resume here, for the current and / or future openings with our client companies. We maintain our separate in-house database of resumes of all categories.</p>
          </div>
        </div>
      </div>



      <div className="form-container">
        {/* <h2>Responsive Form</h2> */}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">First Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Second Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">First Number</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Secondry Number</label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="carNumber">Current Location</label>
              <input
                type="text"
                id="carNumber"
                name="carNumber"
                value={formData.carNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">preffered location</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="CV">CV</label>
              <input
                type="file"
                id="CV"
                name="CV"
                value={formData.file}
                onChange={handleChange}
                required
              />

            </div>

          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

    </div>
  )
}

export default Jobs
