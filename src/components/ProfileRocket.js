import PropTypes from 'prop-types';

const ProfileRocket = ({ rockets }) => (
  <li key={rockets.id} className="profile__li">
    {rockets.rocket_name}
  </li>
);

ProfileRocket.propTypes = {
  rockets: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default ProfileRocket;
