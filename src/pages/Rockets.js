import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return <div>{JSON.stringify(rockets)}</div>;
};

export default Rockets;
