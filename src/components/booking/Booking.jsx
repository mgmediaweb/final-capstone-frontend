/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import './Booking.scss';
import Button from '../button/Button';

const Slider = (props) => {
  const {
    btnAxn,
    price,
    user,
    state,
    vehicle,
  } = props;

  const dateStart = useRef();
  const dateEnd = useRef();

  const [days, setDays] = useState(0);
  const [cost, setCost] = useState(0);

  const axn = (value) => btnAxn(value);

  const calcDays = () => {
    if ((dateStart.current.value !== '') && (dateEnd.current.value !== '')) {
      setDays(5);
      setCost(price);
    } else {
      setDays(0);
      setCost(0);
    }
  };

  const sendForm = () => {
    document.getElementById('bookingForm').submit();
  };

  return (
    <div className={state ? 'booking book-show' : 'booking book-hide'}>
      <div
        className="closeBtn"
        onClick={() => axn(!state)}
      >
        <FaTimes className="icon" />
      </div>
      <h1>BOOKING</h1>
      <div className="centerForm">
        <form id="bookingForm" action="#" method="get">
          <input type="hidden" name="user" value={user} />
          <input type="hidden" name="vehicle" value={vehicle} />

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
              <h2>{`$ ${cost}`}</h2>
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

Slider.propTypes = {
  btnAxn: PropTypes.func.isRequired,
  state: PropTypes.bool,
  price: PropTypes.number.isRequired,
  user: PropTypes.number.isRequired,
  vehicle: PropTypes.number.isRequired,
};

Slider.defaultProps = {
  state: false,
};

export default Slider;
