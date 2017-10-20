import React, { Component } from 'react';
import Main from '../Main';
import Articles from '../Articles';

class Saved extends Component {
  render() {
    let articleView = <div>No saved articles.</div> ;
    if (this.props.articles.length > 0) {
      articleView = <Articles articles={this.props.articles} />;
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
