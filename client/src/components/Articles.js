import React from 'react';

class Articles extends React.Component {
  render() {
    return <pre>{JSON.stringify(this.props.articles, null, 2)}</pre>;
  }
}

export default Articles;
