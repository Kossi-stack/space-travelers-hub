import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Profile from './pages/Profile';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </Router>
);

export default App;
