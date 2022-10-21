/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint linebreak-style: ["error", "windows"] */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import './Booking.scss';
import Button from '../button/Button';

const createDate = (dateStr) => {
  const dateArr = dateStr.split('-');
  return new Date(dateArr[0], parseInt(dateArr[1], 10) - 1, parseInt(dateArr[2], 10));
};

const Booking = (props) => {
  const {
    btnAxn,
    close,
    price,
    state,
    vehicle,
  } = props;

  const user = 1; // GET USER ID FROM THE SESSION

  const dateStart = useRef();
  const dateEnd = useRef();

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
      const rentCost = diffDays * price;

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

  const sendForm = () => {
    /* PUT SOME VALIDATION HERE */
    document.getElementById('bookingForm').submit();
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
        <form id="bookingForm" action="#" method="get">
          <input type="hidden" name="user" value={user} />

          <div className="add-padding-below">
            <label htmlFor="vehicle">Vehicle</label>
            <select
              name="vehicle"
              className="form-field"
              defaultValue={vehicle || ''}
              required
            >
              <option value="">Select one</option>
              <option value="1">Ferrari Testarossa - 1996</option>
              <option value="2">Iso Automovil Isseta - 1956</option>
              <option value="3">Tesla Model 3 - 2021</option>
              <option value="4">Roll Royce Gost - 2022</option>
            </select>
          </div>

          <div className="add-padding-below">
            <label htmlFor="date-start">Start Date</label>
            <input
              type="date"
              ref={dateStart}
              id="date-start"
              name="date-start"
              placeholder="MM/DD/YYYY"
              className="form-field"
              onChange={calcDays}
              required
            />
          </div>

          <div className="add-padding-below">
            <label htmlFor="date-end">Start end</label>
            <input
              type="date"
              ref={dateEnd}
              id="date-end"
              name="date-end"
              placeholder="MM/DD/YYYY"
              className="form-field"
              onChange={calcDays}
              required
            />
          </div>

          <div className="add-padding-below">
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
            <Button
              btnAxn={sendForm}
              iconEnd="check"
              label="Book now"
              size="main"
              color="dark"
            />
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
  price: PropTypes.number,
  vehicle: PropTypes.number,
};

Booking.defaultProps = {
  btnAxn: null,
  close: true,
  price: 0,
  state: false,
  vehicle: null,
};

export default Booking;
