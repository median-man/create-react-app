import React, { Component } from 'react';
import Main from '../Main';
import { FormBtn, Input } from '../Form';
import searchNYT from '../../utils/timesAPI';
import Articles from '../Articles';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      topic: '',
      startYear: '',
      endYear: '',
    };
  }

  // handler for change in form inputs
  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value || '' });
  }

  // search for articles from nyt
  submitSearch(event) {
    event.preventDefault();
    searchNYT(this.state.topic)
    // TODO Finish handling data from nyt api
      .then((data) => {
        this.setState({ articles: data });
      });
  }
  render() {
    // only display list of search results if the are articles to show
    let articleView = null;
    if (this.state.articles.length > 0) {
      articleView = <Articles articles={this.state.articles} />;
    }
    return (
      <Main>
        <form>
          <Input
            id="topic"
            label="Topic:"
            name="topic"
            type="text"
            value={this.state.topic}
            required
            onChange={e => this.handleInputChange(e)}
          />
          <Input
            id="startYear"
            label="Start Year:"
            name="startYear"
            type="number"
            value={this.state.startYear}
            onChange={e => this.handleInputChange(e)}
          />
          <Input
            id="endYear"
            label="End Year:"
            name="endYear"
            type="number"
            value={this.state.endYear}
            onChange={e => this.handleInputChange(e)}
          />
          <FormBtn
            id="btnSearch"
            type="submit"
            disabled={!this.state.topic}
            onClick={e => this.submitSearch(e)}
          >
            Search
          </FormBtn>
        </form>
        {articleView}
      </Main>
    );
  }
}
export default Search;
