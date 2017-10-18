import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import { Col, Container, Row } from './Grid';
import { FormBtn, Input } from './Form';

class Main extends Component {
  render() {
    return (
      <div>
        <Container>
          {/* Page Header */}
          <Jumbotron>
            <h1 className="text-center">
              <strong><i className="fa fa-newspaper-o" /> New York Times Search</strong>
            </h1>
          </Jumbotron>
    
          <form>
            <Input id="topic" label="Topic:" name="topic" type="text" required />
            <Input id="startYear" label="Start Year:" name="topic" type="number" />
            <Input id="endYear" label="End Year:" name="topic" type="number" />
            <FormBtn id="btnSearch" type="submit">Search</FormBtn>
          </form>
    
          { this.props.children }
    
          {/* Footer Row */}
          <Row>
            <Col size="xs-12">
              <hr />
              <h5 className="text-center"><small>Made by John Desrosiers.</small></h5>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
