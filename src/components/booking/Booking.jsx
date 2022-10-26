/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint linebreak-style: ["error", "windows"] */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import './Booking.scss';
import { useSelector } from 'react-redux';

const createDate = (dateStr) => {
  const dateArr = dateStr.split('-');
  return new Date(dateArr[0], parseInt(dateArr[1], 10) - 1, parseInt(dateArr[2], 10));
};

const Booking = (props) => {
  const {
    btnAxn,
    close,
    state,
    vehicle,
  } = props;

  const user = JSON.parse(localStorage.getItem('current_user')).id;
  const car = useSelector((state) => state.vehicles);
  let carPrice = 0;

  const dateStart = useRef();
  const dateEnd = useRef();
  const vehicles = useRef();

  const [days, setDays] = useState('---');
  const [cost, setCost] = useState('---');

  const calcDays = () => {
    const dateStartVal = dateStart.current.value;
    const dateEndVal = dateEnd.current.value;

    if ((dateStartVal !== '') && (dateEndVal !== '')) {
      const oneDay = 24 * 60 * 60 * 1000;

      const options = { style: 'currency', currency: 'USD' };
      const numberFormat = new Intl.NumberFormat('en-US', options);

      const diffDays = Math.round((createDate(dateEndVal) - createDate(dateStartVal)) / oneDay) + 1;
      const rentCost = diffDays * carPrice;

      if (diffDays >= 0) {
        setDays(diffDays);
        setCost(numberFormat.format(rentCost));
      } else {
        setDays('---');
        setCost('---');
      }
    } else {
      setDays('---');
      setCost('---');
    }
  };

  const findPrice = () => {
    const vehicleSelect = vehicles.current.value;
    const carSelected = car.find((element) => element.id === parseInt(vehicleSelect, 10));
    carPrice = carSelected.price;
    calcDays();
  };

  const sendForm = async (e) => {
    e.preventDefault();
    const postBody = {
      start_date: e.target.date_start.value,
      end_date: e.target.date_end.value,
      city: e.target.city.value,
      vehicle_id: parseInt(e.target.vehicle.value, 10),
      user_id: user,
    };
    console.log(postBody);
    const postBooking = {
      method: 'POST',
      headers: {
        Authorization: JSON.parse(localStorage.getItem('current_user')).token,
      },
      body: JSON.stringify(postBody),
    };
    await fetch(`https://elsonotake-backend.herokuapp.com/api/v1/users/${user}/bookings`, postBooking);
    window.location.href = '/models';
  };

  return (
    <div className={state ? 'booking book-show' : 'booking book-hide'}>
      <div
        className={close ? 'closeBtn' : 'hide'}
        onClick={() => btnAxn(!state)}
      >
        <FaTimes className="icon" />
      </div>
      <h2>BOOKING</h2>
      <div className="centerForm">
        <form onSubmit={sendForm} method="post">
          <input type="hidden" name="user" value={user} />

          <div className="add-margin-below">
            <label htmlFor="vehicle">Vehicle</label>
            <select
              name="vehicle"
              className="form-field"
              ref={vehicles}
              onChange={findPrice}
              defaultValue={vehicle || ''}
              required
            >
              <option value="">Select Car</option>
              {
                car.map((carro) => (
                  <option
                    key={carro.id}
                    value={carro.id}
                  >
                    {carro.brand}
                    {' '}
                    {carro.model}
                  </option>
                ))
              }
            </select>
          </div>

          <div className="add-margin-below">
            <label htmlFor="date_start">Start Date</label>
            <input
              type="date"
              ref={dateStart}
              id="date_start"
              name="date_start"
              placeholder="MM/DD/YYYY"
              className="form-field"
              onChange={findPrice}
              required
            />
          </div>

          <div className="add-margin-below">
            <label htmlFor="date_end">End Date</label>
            <input
              type="date"
              ref={dateEnd}
              id="date_end"
              name="date_end"
              placeholder="MM/DD/YYYY"
              className="form-field"
              onChange={findPrice}
              required
            />
          </div>

          <div className="add-margin-below">
            <label htmlFor="city">City</label>
            <select name="city" className="form-field" required>
              <option value="">Select one</option>
              <option value="Bogota">Bogota (Col)</option>
              <option value="Hermosillo">Hermosillo (Méx)</option>
              <option value="Manizales">Manizales (Col)</option>
              <option value="Sao Paulo">Sao Paulo (Bra)</option>
            </select>
          </div>

          <div className="resume">
            <div>
              <span>Days</span>
              <h2>{days}</h2>
            </div>
            <div>
              <span>Cost</span>
              <h2>{cost}</h2>
            </div>
          </div>

          <div className="form-bottom-bar">
            <button type="submit">Book now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Booking.propTypes = {
  btnAxn: PropTypes.func,
  close: PropTypes.bool,
  state: PropTypes.bool,
  vehicle: PropTypes.number,
};

Booking.defaultProps = {
  btnAxn: null,
  close: true,
  state: false,
  vehicle: null,
};

export default Booking;
