import { useSelector } from 'react-redux';
import MissionItem from '../components/MissionItem';

const Missions = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <main className="container">
      <table className="missions">
        <thead className="missions__header">
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody className="missions__body">
          {missions
            && missions.map((mission) => (
              <MissionItem key={mission.mission_id} mission={mission} />
            ))}
        </tbody>
      </table>
    </main>
  );
};

export default Missions;
