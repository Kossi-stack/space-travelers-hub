import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line max-len
  const missionState = useSelector(
    (state) => state.missions.filter((m) => m.mission_id === mission.mission_id)[0],
  );

  const handleJoinMission = (e) => {
    e.preventDefault();
    console.log('selector', missionState);
    dispatch(joinMission(mission.mission_id));
  };

  const handleLeaveMission = (e) => {
    e.preventDefault();
    dispatch(leaveMission(mission.mission_id));
  };

  return (
    <tr key={mission.mission_id}>
      <td className="missions_td--bold">{mission.mission_name}</td>
      <td className="missions_td--desc">{mission.description}</td>
      <td className="align-center">
        {!missionState.reserved && <span className="badge">NOT A MEMBER</span>}
        {missionState.reserved && (
          <span className="badge badge-active">ACTIVE MEMBER</span>
        )}
      </td>
      <td className="align-center">
        {!missionState.reserved && (
          <button type="button" className="btn-red" onClick={handleJoinMission}>
            Join Mission
          </button>
        )}
        {missionState.reserved && (
          <button
            type="button"
            className="btn-gray"
            onClick={handleLeaveMission}
          >
            Leave Mission
          </button>
        )}
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default MissionItem;
