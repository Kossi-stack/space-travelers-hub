import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileMission from '../../components/ProfileMission';

it('renders Profile Mission Component correctly', () => {
  const mission = {
    mission_id: '9D1B7E0',
    mission_name: 'Thiacom',
    description: 'some description',
    reserved: false,
  };
  const tree = renderer
    .create(
      <Router>
        <ProfileMission key={mission.mission_id} mission={mission} />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
