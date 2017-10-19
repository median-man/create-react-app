import React from 'react';
import ArticlePanel from './ArticlePanel';

class Articles extends React.Component {
  render() {
    return <div>{this.props.articles.map( article => <ArticlePanel data={article} />)}</div>;
  }
}

export default Articles;
