/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/form/Form';

const NewScreen = () => {
  const formSubmit = async (e) => {
    e.preventDefault();
    const postBody = {
      brand: e.target.brand.value,
      model: e.target.model.value,
      year: e.target.year.value,
      country: e.target.country.value,
      color: e.target.color.value,
      power: e.target.power.value,
      max_speed: e.target.maxSpeed.value,
      acceleration: e.target.acceleration.value,
      price: parseInt(e.target.price.value, 10),
      description: e.target.description.value,
    };
    const postItem = {
      method: 'POST',
      headers: {
        Authorization: JSON.parse(localStorage.getItem('current_user')).token,
      },
      body: JSON.stringify(postBody),
    };
    await fetch('https://elsonotake-backend.herokuapp.com/api/v1/vehicles', postItem);
    window.location.href = '/models';
  };

  return (
    <div className="container page-admin">
      <div className="info-container">
        <h1>Add new car</h1>

        <form onSubmit={formSubmit} method="post">

          <Form />

          <div className="grid-flex">
            <Link to="/admin">
              Back to admin
            </Link>

            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewScreen;
