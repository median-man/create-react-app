import React from 'react';
import Jumbotron from './Jumbotron';
import { Col, Container, Row } from './Grid';

const Main = ({ children }) => (
  <Container>
    {/* Page Header */}
    <Jumbotron>
      <h1 className="text-center">
        <strong><i className="fa fa-newspaper-o" /> New York Times Search</strong>
      </h1>
    </Jumbotron>
    { children }

    {/* Footer Row */}
    <Row>
      <Col size="xs-12">
        <hr />
        <h5 className="text-center"><small>Made by John Desrosiers.</small></h5>
      </Col>
    </Row>
  </Container>
);

export default Main;
