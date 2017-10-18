import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Search from './components/Search';
import Saved from './components/Saved';
import { FormBtn, Input } from './components/Form';
import searchNYT from './utils/timesAPI';

class App extends Component {
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
      <Router>
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
          <Switch>
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </Main>
      </Router>
    );
}
}
export default App;
