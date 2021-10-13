import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missions';
import MissionItem from '../components/MissionItem';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <main className="container">
      <table className="missions">
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody className="missions__body">
          {missions && missions.map((mission) => (
            <MissionItem
              key={mission.id}
              mission={mission}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Missions;
