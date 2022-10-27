/* eslint-disable react/no-unescaped-entities */
/* eslint linebreak-style: ["error", "windows"] */
import React, { useState } from 'react';
import Button from '../components/button/Button';
import Booking from '../components/booking/Booking';

const BookingScreen = () => {
  const [bookVisible, setBookVisible] = useState(false);

  const showBooking = () => setBookVisible(!bookVisible);

  return (
    <div className="container page-booking">
      <p>
        Thank you for being interested in renting one of our exclusive vehicles that we have
        for you at EXO Cars, it is important to consider the following before continuing with
        your reservation:
      </p>
      <p>
        It is essential to have a valid driver's license at all times of the rental, if you
        are a foreigner you must have a valid international driver's license.
      </p>
      <p>
        For any rental you must make the reservation at least 48 hours in advance.
      </p>
      <p>
        For any cancellation you can contact us and learn about our cancellation policies.
      </p>

      <Button
        btnAxn={showBooking}
        color="dark"
        iconStart="calendar"
        iconEnd="arrow"
        label="Booking"
        size="main"
      />

      <Booking
        state={bookVisible}
        btnAxn={showBooking}
      />
    </div>
  );
};

export default BookingScreen;
