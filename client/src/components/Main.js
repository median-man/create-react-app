import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import { Col, Container, Row } from './Grid';
import { FormBtn, Input } from './Form';
import { searchNYT } from '../utils/timesAPI';

class Main extends Component {
  state = {};

  // handler for change in form inputs
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // search for articles from nyt
  submitSearch = event => {
    event.preventDefault();
  }

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
            <Input 
              id="topic" 
              label="Topic:" 
              name="topic" 
              type="text" 
              value={this.state.searchTopic}
              required
              onChange={this.handleInputChange}
            />
            <Input
              id="startYear"
              label="Start Year:"
              name="topic"
              type="number"
              onChange={this.handleInputChange}
            />
            <Input
              id="endYear"
              label="End Year:"
              name="topic"
              type="number"
              onChange={this.handleInputChange}
            />
            <FormBtn
              id="btnSearch"
              type="submit"
              disabled={!this.state.searchTopic}
              onClick={this.searchNYT}
            >
              Search
            </FormBtn>
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
