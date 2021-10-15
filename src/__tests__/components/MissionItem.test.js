import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import MissionItem from '../../components/MissionItem';

it('renders rocket item correctly', () => {
  const mission = {
    mission_id: '9D1B7E0',
    mission_name: 'Thiacom',
    description: 'some description',
    reserved: false,
  };
  const tree = renderer
    .create(
      <Provider store={store}>
        <MissionItem key={mission.mission_id} mission={mission} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
