/* eslint-disable import/no-named-as-default */
/* eslint linebreak-style: ["error", "windows"] */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BackButton from '../components/backbutton/BackButton';
import Booking from '../components/booking/Booking';
import Button from '../components/button/Button';
import Gallery from '../components/gallery/Gallery';

const DetailScreen = () => {
  const { id } = useParams();
  const vehicles = useSelector((state) => state.vehicles);
  const car = vehicles.find((element) => element.id === parseInt(id, 10));
  const gallery = car.galleries;
  const [background, setBackground] = useState(gallery[0].photo);
  const [bookVisible, setBookVisible] = useState(false);

  const showBooking = () => setBookVisible(!bookVisible);
  const changeBG = (newbg) => setBackground(newbg);

  return (
    <div className="container" style={{ backgroundImage: `url(${background})` }}>
      <div className="whiteCortain">

        <Gallery data={gallery} btnAxn={changeBG} />

        <div className="detailBox">
          <h2>{car.brand}</h2>
          <h1>{car.model}</h1>

          <p>
            {car.description}
          </p>

          <table className="detail-table">
            <tbody>
              <tr>
                <td>Year</td>
                <td className="text-end">{car.year}</td>
              </tr>
              <tr>
                <td>Power (CV)</td>
                <td className="text-end">{car.power}</td>
              </tr>
              <tr>
                <td>Max. Speed</td>
                <td className="text-end">{car.max_speed}</td>
              </tr>
              <tr>
                <td>0-100 km/h</td>
                <td className="text-end">{car.acceleration}</td>
              </tr>
            </tbody>
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

      <BackButton />
      <Booking
        vehicle={car.id}
        price={car.price}
        state={bookVisible}
        btnAxn={showBooking}
      />
    </div>
  );
};

export default DetailScreen;
