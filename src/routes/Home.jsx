import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import CarCard from '../components/carCard/CarCard';
import carsData from '../mockData/carsData';
import './Home.scss';
import CarCard from '../components/carCard/CarCard';

function Home() {
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
            carsData.carsData.map((car, index) => (
              <CarCard
                key={car.id}
                index={index}
                name={car.name}
                description={car.description}
                image={car.image}
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
