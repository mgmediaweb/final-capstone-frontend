/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import './CarCard.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

function CarCard({
  name, description, image, id,
}) {
  return (
    <li className="car-card">
      <div className="card-container">
        <Link to={`/detail/${id}`}>
          <img src={image} alt="car" className="car-card-image" />
        </Link>
        <h2>{name}</h2>
        <hr className="division-span" />
        <p>{description}</p>

        <ul className="social-icons">
          <li><FaFacebookF className="icon" /></li>
          <li><FaTwitter className="icon" /></li>
          <li><FaInstagram className="icon" /></li>
        </ul>

      </div>
    </li>
  );
}

CarCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CarCard;
