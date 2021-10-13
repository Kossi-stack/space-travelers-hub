import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';
import RocketItem from '../components/RocketItem';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <main className="container">
      <ul className="rockets">
        {rockets && rockets.map((rocket) => (
          <RocketItem rocketProps={rocket} key={rocket.id} />
        ))}
      </ul>
    </main>
  );
};

export default Rockets;
