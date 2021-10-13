import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missions';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  const handleJoinMission = (e) => {
    e.preventDefault();
    dispatch(joinMission(mission.mission_id));
  };

  return (
    <tr key={mission.mission_id}>
      <td className="missions_td--bold">{mission.mission_name}</td>
      <td className="missions_td--desc">{mission.description}</td>
      <td className="align-center">
        <span className="badge">NOT A MEMBER</span>
      </td>
      <td className="align-center">
        <button type="button" className="btn-red" onClick={handleJoinMission}>
          Join Mission
        </button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MissionItem;
