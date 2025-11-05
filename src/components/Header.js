import { HEADER_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img className="headerLogo" src={HEADER_LOGO} />
      </div>
      <div className="navItems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
