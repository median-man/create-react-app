import React from 'react';

export const Input = ({ id, label, ...props }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input className="form-control" id={id} {...props} />
  </div>
);

