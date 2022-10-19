import { NavLink, Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaGooglePlusG,
  FaPinterestP,
  FaTwitter,
} from 'react-icons/fa';
import './Navbar.scss';

const Navbar = () => (
  <div className="navbar">
    <div className="navTop">
      <Link to="/" className="img-container" />

      <nav>
        <ul>
          <li>
            <NavLink to="/detail/1">
              MODELS
            </NavLink>
          </li>
          <li>
            <NavLink to="/lifestyle">
              LIFESTYLE
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/testdrive">
              TEST DRIVE
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>

    <div className="social-icons">
      <ul>
        <li><FaTwitter className="icon" /></li>
        <li><FaFacebookF className="icon" /></li>
        <li><FaGooglePlusG className="icon" /></li>
        <li><FaPinterestP className="icon" /></li>
      </ul>

      <p>Microverse Copyright 2022</p>
    </div>
  </div>
);

export default Navbar;
