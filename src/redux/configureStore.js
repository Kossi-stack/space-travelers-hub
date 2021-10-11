import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import { composeWithDevTools as devTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';
import profileReducer from './profile/profile';

const reducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
  profile: profileReducer,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), applyMiddleware(logger), devTools()),
);

export default store;
