import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/pages/Search';
import Saved from './components/pages/Saved';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Saved} />
    </Switch>
  </Router>
);
export default App;
