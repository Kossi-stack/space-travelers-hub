import logo from '../../planet.png';

const Header = () => (
  <div className="header__logo">
    <img src={logo} alt="logo" className="header__logo-img" />
    <h1 className="header__logo-h1">Space Traveler&apos;s Hub</h1>
  </div>
);

export default Header;
