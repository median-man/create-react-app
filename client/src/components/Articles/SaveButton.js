import React from 'react';

const SaveButton = ({ handleClick }) => (
  <button onClick={e => handleClick(e)} className="btn btn-default">Save</button>
);

export default SaveButton;
