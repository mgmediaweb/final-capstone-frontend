import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Gallery from '../components/gallery/Gallery';

function Home() {
  const gallery = ['model3a.jpg', 'model3b.jpg', 'model3c.jpg', 'model3d.jpg'];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <header>
        <h1>LATEST MODELS</h1>
        <p>Please select a car</p>
        <span className="division-span">____________</span>
      </header>
      <ul className="slider">
        <Slider {...settings}>
          {
            gallery.map((car, index) => (
              <CarCard
                key={car}
                index={index}
              />
            ))
          }
        </Slider>
      </ul>
    </div>
  );
}

export default Home;
