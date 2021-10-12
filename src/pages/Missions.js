import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return <div>{JSON.stringify(missions)}</div>;
};

export default Missions;
