import React, { Component } from 'react';
import articlesAPI from '../../utils/articlesAPI.js';

const css = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
};

class ArticlePanel extends Component {
  deleteArticle() {
    // TODO send DELETE to /api/saved
    console.log('TODO: send delete request for article.', this.props.data);
  }
  saveArticle() {
    const { headline, url, pub_date, snippet } = this.props.data;
    articlesAPI.save(headline, url, pub_date, snippet).catch(console.log);
  }
  render() {
    const { data } = this.props;
    const { headline, snippet } = data;
    return (
      <div className="panel panel-default">

        {/* TODO:
          1) place headline and button in a single row. will need to import Grid component
          2) if article is a saved article, display a delete button instead of save button
          3) Refactor to implement a Button component
        */}
        <div className="panel-heading" style={css}>        
          {headline}
          <button
            onClick={() => this.saveArticle()}
            className="btn btn-default btn-sm pull-right"
          >Save
          </button>
        </div>

        <div className="panel-body">
          {snippet}
        </div>
      </div>
    );
  }
}

export default ArticlePanel;
