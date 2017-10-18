import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Search from './components/Search';
import Saved from './components/Saved';

const App = () => (
  <Router>
    <Route component={Main}>
      <Switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </Route>
  </Router>
);

export default App;
