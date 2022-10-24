/* eslint linebreak-style: ["error", "windows"] */
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './BackButton.scss';

const BackButton = () => (
  <Link to="/models" className="back-link">
    <FaArrowLeft className="icon" />
  </Link>
);

export default BackButton;
