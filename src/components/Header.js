import { HEADER_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img className="headerLogo" src={HEADER_LOGO} />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
