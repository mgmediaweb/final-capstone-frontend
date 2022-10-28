/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import './CarCard.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CarCard = ({
  brand, model, description, image, id,
}) => {
  let showDescription = description;
  const maxChars = 110;

  if (showDescription.length > maxChars) showDescription = `${showDescription.slice(0, maxChars).trim()}...`;

  return (
    <li className="car-card">
      <div className="card-container">
        <Link to={`/models/${id}`}>
          <img src={image} alt="car" className="car-card-image" />
        </Link>
        <h2>{brand}</h2>
        <h2>{model}</h2>
        <hr className="division-span" />
        <p className="car-description">{showDescription}</p>

      </div>
    </li>
  );
};

CarCard.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CarCard;
