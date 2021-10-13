import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = ({ mission }) => (
  <tr>
    <td className="missions_td--bold">{mission.mission_name}</td>
    <td className="missions_td--desc">{mission.description}</td>
    <td className="align-center">
      <span className="badge">NOT A MEMBER</span>
    </td>
    <td className="align-center">
      <button type="button" className="btn-red">
        Join Mission
      </button>
    </td>
  </tr>
);

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MissionItem;
