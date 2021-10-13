import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missions';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  const join = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <tr key={mission.id}>
      <td className="missions_td--bold">{mission.name}</td>
      <td className="missions_td--desc">{mission.description}</td>
      <td className="align-center">
        <span className="badge">NOT A MEMBER</span>
      </td>
      <td className="align-center">
        <button type="button" className="btn-red" onClick={() => join(mission.id)}>
          Join Mission
        </button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MissionItem;
