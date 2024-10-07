import React from 'react';
import './Input.css';

function Input({ type, value, onChange, placeholder, className, defaultValue }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      defaultValue={defaultValue}
    />
  );
}

export default Input;