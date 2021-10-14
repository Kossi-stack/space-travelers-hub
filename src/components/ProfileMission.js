import React from 'react';
import PropTypes from 'prop-types';

const ProfileMission = ({ mission }) => (
  <li key={mission.mission_id} className="profile__li">
    {mission.mission_name}
  </li>
);

ProfileMission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default ProfileMission;
