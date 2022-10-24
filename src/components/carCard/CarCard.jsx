/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import './CarCard.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CarCard({
  brand, model, description, image, id,
}) {
  return (
    <li className="car-card">
      <div className="card-container">
        <Link to={`/models/${id}`}>
          <img src={image} alt="car" className="car-card-image" />
        </Link>
        <h2>{brand}</h2>
        <h2>{model}</h2>
        <hr className="division-span" />
        <p>{description}</p>

      </div>
    </li>
  );
}

CarCard.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CarCard;
