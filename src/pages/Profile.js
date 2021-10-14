import React from 'react';
import { useSelector } from 'react-redux';
import ProfileMission from '../components/ProfileMission';

const Profile = () => {
  const missions = useSelector((state) => state.missions.filter((m) => m.reserved === true));
  return (
    <main className="container profile">
      <section className="profile__missions">
        <h1 className="profile__h1">My Missions</h1>
        <ul className="profile__ul">
          {missions
            && missions.map((mission) => (
              <ProfileMission key={mission.id} mission={mission} />
            ))}
        </ul>
      </section>
      <section className="profile__rockets">
        <h1 className="profile__h1">My Rockets</h1>
        <ul className="profile__ul" />
      </section>
    </main>
  );
};

export default Profile;
