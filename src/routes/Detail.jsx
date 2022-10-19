/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import Button from '../components/button/Button';

const DetailScreen = () => {
  const [background, setBackground] = useState(1);

  const btnAxn = () => {
    let newbg = background + 1;
    if (newbg > 4) newbg = 1;
    setBackground(newbg);
  };

  return (
    <div className="container" style={{ backgroundImage: `url(/assets/vehicles/model${background}a.jpg)` }}>
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
            btnAxn={btnAxn}
            iconStart="calendar"
            iconEnd="arrow"
            label="Booking"
            size="main"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
