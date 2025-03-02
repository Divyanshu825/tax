import { TextField } from '@mui/material';
import React from 'react';

const TextInput = ({ type, variant, color, label, onChange, value, helperText, placeholder }) => {
  return (
    <TextField
      error={helperText ? true : false}
      focused={helperText ? true : false}
      fullWidth
      required
      type={type}
      label={label}
      value={value}
      onChange={onChange}
      helperText={helperText}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
