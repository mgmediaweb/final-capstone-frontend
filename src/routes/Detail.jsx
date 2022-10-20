/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import BackButton from '../components/backbutton/BackButton';
import Booking from '../components/booking/Booking';
import Button from '../components/button/Button';
import Slider from '../components/slider/Slider';

const DetailScreen = () => {
  const gallery = ['model3a.jpg', 'model3b.jpg', 'model3c.jpg', 'model3d.jpg'];
  const [background, setBackground] = useState(gallery[0]);
  const [bookVisible, setBookVisible] = useState(false);

  const showBooking = () => setBookVisible(!bookVisible);
  const changeBG = (newbg) => setBackground(newbg);

  return (
    <div className="container" style={{ backgroundImage: `url(/assets/vehicles/${background})` }}>
      <div className="whiteCortain">
        <div className="detailBox">
          <h2>Lamborghini</h2>
          <h1>AVENTADOR LP 780-4 ULTIMAE</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia massa
            euismod convallis fermentum. Cras porttitor tellus risus, eget placerat quam gravida
            a. Orci varius natoque penatibus et magnis dis parturient montes.
          </p>

          <table>
            <tr>
              <td>Power (CV)</td>
              <td className="text-end">780 CV (574 kW)</td>
            </tr>
            <tr>
              <td>Max. Speed</td>
              <td className="text-end">355 km/h</td>
            </tr>
            <tr>
              <td>0-100 km/h</td>
              <td className="text-end">2.8s</td>
            </tr>
          </table>

          <Button
            btnAxn={showBooking}
            iconStart="calendar"
            iconEnd="arrow"
            label="Booking"
            size="main"
          />
        </div>
      </div>

      <Slider data={gallery} btnAxn={changeBG} />
      <BackButton />
      <Booking
        user={1}
        vehicle={1}
        price={580}
        state={bookVisible}
        btnAxn={showBooking}
      />
    </div>
  );
};

export default DetailScreen;
