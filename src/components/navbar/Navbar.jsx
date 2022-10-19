import { Link } from 'react-router-dom';
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
      <Link to="/" className="img-container">
        <img src="./assets/images/logo.png" alt="IMDB Logo" className="logo-main" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/" className="active">
              MODELS
            </Link>
          </li>
          <li>
            <Link to="/">
              LIFESTYLE
            </Link>
          </li>
          <li>
            <Link to="/">
              SHOP
            </Link>
          </li>
          <li>
            <Link to="/">
              TEST DRIVE
            </Link>
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
