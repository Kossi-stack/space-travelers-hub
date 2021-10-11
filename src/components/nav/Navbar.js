import { NavLink } from 'react-router-dom';
import Header from './Header';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="nav-bar">
      <Header />
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id} className="navink">
            <NavLink
              className="nav-a"
              to={link.path}
              activeClassName="selected"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
