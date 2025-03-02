import React, { useState } from 'react';
import './AddService.css';
import { Button, Grid, Stack } from '@mui/material';
import TextInput from '../../../component/TextInput';
import CancelIcon from '@mui/icons-material/Cancel';

const AddService = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [points, setPoints] = useState([""]); // Initially one empty point field
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
  };

  const addPoint = () => {
    setPoints([...points, ""]); // Add an empty point field
  };

  const removePoint = (index) => {
    const updatedPoints = points.filter((_, i) => i !== index); // Remove the point at the specified index
    setPoints(updatedPoints);
  };

  const handlePointChange = (e, index) => {
    const updatedPoints = points.map((point, i) =>
      i === index ? e.target.value : point
    );
    setPoints(updatedPoints);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-12 rounded-2xl shadow-xl max-w-xl w-full text-center">
        <h2 className="text-4xl font-bold text-gray-700 mb-10">Add Service</h2>
        <form className="animated-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="title">Service Name</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className={title ? 'filled' : ''}
            />
          </div>

          <div className="form-field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className={title ? 'filled' : ''}
            />
          </div>

          <div className="form-field">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className={description ? 'filled' : ''}
            />
          </div>
          <div className="form-field">
            {/* <label htmlFor="image">Image</label> */}
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Selected Preview" />
              </div>
            )}
          </div>
          <div className="form-field">

            {points.map((point, index) => (
              <div key={index} className="point-field relative flex items-center gap-2  p-2 rounded-md">
                <input
                  type="text"
                  value={point}
                  onChange={(e) => handlePointChange(e, index)}
                  required
                  placeholder={`${index + 1}. Service Point`}
                  className="flex-1 p-2 border rounded-md"
                />
                <CancelIcon
                  key={`cancel-icon-${index}`}
                  color="error"
                  onClick={() => removePoint(index)}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </div>
            ))}

            <button
              type="button"
              className="add-point-btn"
              onClick={addPoint}
            >
              Add Point
            </button>
          </div>


          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};





export default AddService