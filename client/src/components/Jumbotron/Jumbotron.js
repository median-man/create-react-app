import React from 'react';

// css styles applied to jumbotron div
const jtstyles = {
  'background-color': '#20315A',
  color: 'white',
};

const Jumbotron = ({ children }) => (
  <div style={jtstyles} className="jumbotron">
    {children}
  </div>
);

export default Jumbotron;
