import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Rockets} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </Router>
);

export default App;
