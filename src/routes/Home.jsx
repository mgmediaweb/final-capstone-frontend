/* eslint-disable react/jsx-props-no-spreading */
/* eslint linebreak-style: ["error", "windows"] */
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.scss';
import CarCard from '../components/carCard/CarCard';
import { getVehicles } from '../redux/vehicles/vehicles';
import { getReservations } from '../redux/users/users';

function Home() {
  const defaultImage = 'https://firebasestorage.googleapis.com/v0/b/exo-cars-5611d.appspot.com/o/empty_car.jpg?alt=media&token=952474fe-a836-4a2e-8576-6961aac8d7e3';
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicles);

  useEffect(() => {
    dispatch(getReservations());
    dispatch(getVehicles());
  }, []);

  const settings = {
    className: 'center',
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="home-container">
        <header className="cars-header">
          <h1>LATEST MODELS</h1>
          <p>Please select a car</p>
          <hr className="division-span" />
        </header>
        <div className="cars-container">
          <ul className="car-slider">
            <Slider {...settings}>
              {
            vehicles.map((car, index) => (
              <CarCard
                key={car.id}
                index={index}
                brand={car.brand}
                model={car.model}
                description={car.description}
                image={car.galleries.length ? car.galleries[0].photo : defaultImage}
                id={car.id}
              />
            ))
          }
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
