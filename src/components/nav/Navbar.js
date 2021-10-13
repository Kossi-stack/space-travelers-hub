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
  ];

  return (
    <header className="header container-header">
      <Header />
      <nav className="header__nav">
        <ul className="header__nav-ul">
          {links.map((link) => (
            <li key={link.id} className="header__nav-li">
              <NavLink
                activeClassName="selected"
                className="header__nav-a"
                to={link.path}
                exact
              >
                {link.text}
              </NavLink>
            </li>
          ))}
          <div className="v-divider" />
          <li className="header__nav-li">
            <NavLink
              activeClassName="selected"
              className="header__nav-a"
              to="/profile"
              exact
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
