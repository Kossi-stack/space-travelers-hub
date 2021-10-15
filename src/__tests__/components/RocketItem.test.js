import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import RocketItem from '../../components/RocketItem';

it('renders rocket item correctly', () => {
  const rocket = {
    id: 1,
    rocket_name: 'falcon 1',
    description: 'some description',
    reserved: true,
    flickr_images: [
      'https://imgur.com/DaCfMsj.jpg',
      'https://imgur.com/azYafd8.jpg',
    ],
  };
  const tree = renderer
    .create(
      <Provider store={store}>
        <RocketItem key={rocket.id} rocketProps={rocket} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
