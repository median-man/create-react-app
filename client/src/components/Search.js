import React, { Component } from 'react';
import Main from './Main';
import { FormBtn, Input } from './Form';
import searchNYT from '../utils/timesAPI';

class Search extends Component {
    state = {
      articles: []
    };

    // handler for change in form inputs
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };

    // search for articles from nyt
    submitSearch = event => {
      event.preventDefault();
      searchNYT( this.state.topic )
      // TODO Finish handling data from nyt api
        .then(data => {
          this.setState({ articles: data });
        });
    }
  render() {
    return (
        <Main>
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
              disabled={!this.state.topic}
              onClick={this.submitSearch}
            >
              Search
            </FormBtn>
          </form>
        </Main>

    );
}
}
export default Search;
