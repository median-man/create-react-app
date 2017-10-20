import React, { Component } from 'react';
import Main from '../Main';
import Articles from '../Articles';
import articlesAPI from '../../utils/articlesAPI';

class Saved extends Component {
  constructor() {
    super();
    this.state = { articles: [] };
  }

  // Load saved articles once component is mounted
  componentDidMount() { this.loadSaved(); }

  // Loads saved articles from articles api
  loadSaved() {
    articlesAPI.get()
      .then(articles => this.setState({ articles }))
      // TODO: add error handling
      .catch(console.log);
  }
  render() {
    console.log(this.state.articles);
    let articleView = <div>No saved articles.</div>;
    if (this.state.articles.length > 0) {
      articleView = <Articles articles={this.state.articles} />;
    }
    return (
      <Main>
        <h2>Saved Articles</h2>
        <hr />
        {articleView}
      </Main>
    );
  }
}
export default Saved;
