import React from 'react';
import Jumbotron from './Jumbotron';
import Footer from './Footer';

const Main = ({ children }) => (
  <div className="container">
    <Jumbotron>
      <h1 className="text-center">
        <strong><i className="fa fa-newspaper-o" /> New York Times Search</strong>
      </h1>
    </Jumbotron>
    { children }
    <Footer />
  </div>
);

export default Main;
