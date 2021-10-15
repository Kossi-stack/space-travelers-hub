import { useSelector } from 'react-redux';
import RocketItem from '../components/RocketItem';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <main className="container">
      <ul className="rockets">
        {rockets
          && rockets.map((rocket) => (
            <RocketItem rocketProps={rocket} key={rocket.id} />
          ))}
      </ul>
    </main>
  );
};

export default Rockets;
