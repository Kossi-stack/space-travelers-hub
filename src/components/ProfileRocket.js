import React from 'react';
import PropTypes from 'prop-types';

const ProfileRocket = ({ rockets }) => (
  <li key={rockets.rocket_id} className="profile__li">
    {rockets.rocket_name}
  </li>
);

ProfileRocket.propTypes = {
  rockets: PropTypes.shape({
    rocket_id: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default ProfileRocket;
