import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileRocket from '../../components/ProfileRocket';

it('renders Profile Rockets Component correctly', () => {
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
      <Router>
        <ProfileRocket key={rocket.id} rockets={rocket} />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
