import React from 'react';
import { useSelector } from 'react-redux';
import ProfileMission from '../components/ProfileMission';
import ProfileRocket from '../components/ProfileRocket';

const Profile = () => {
  const missions = useSelector((state) => state.missions.filter((m) => m.reserved === true));
  const rockets = useSelector((state) => state.rockets.filter((r) => r.reserved === true));

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
        <ul className="profile__ul">
          {rockets
            && rockets.map((rocket) => (
              <ProfileRocket key={rocket.id} rockets={rocket} />
            ))}
        </ul>
      </section>
    </main>
  );
};

export default Profile;
