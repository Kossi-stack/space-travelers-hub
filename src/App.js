import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/nav/Navbar';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import { getRockets } from './redux/rockets/rockets';
import { getMissions } from './redux/missions/missions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
    dispatch(getMissions());
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Rockets} />
        <Route exact path="/missions" component={Missions} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
