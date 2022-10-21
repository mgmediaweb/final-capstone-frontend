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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed interdum lorem.
        Quisque sed eleifend urna, in mattis lectus. Integer eu nulla ut libero gravida maximus.
        Nam tempor felis semper eros tristique dictum. Pellentesque in rutrum lorem, nec gravida
        lacus. Donec ullamcorper turpis non nisi euismod, nec vulputate justo pulvinar. Morbi
        quam magna, mattis dignissim blandit nec, rhoncus non dui.
      </p>
      <p>
        Duis porta quis ligula sed volutpat. Maecenas ut neque sed ipsum eleifend feugiat.
        Nullam id euismod quam. Nam eleifend, eros sit amet interdum maximus, lectus metus
        tristique mi, sit amet fermentum dui nunc ut nibh. Praesent dapibus nisl leo, vitae
        sodales erat finibus ut. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        In accumsan tortor at sapien vehicula, at efficitur metus pulvinar. Nunc ornare ex ac
        enim vulputate fringilla. Aliquam lacus purus, lacinia id dolor vel, dictum malesuada
        orci. Morbi eleifend enim commodo arcu rhoncus blandit.
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
