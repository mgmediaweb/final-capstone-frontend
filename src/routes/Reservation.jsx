/* eslint linebreak-style: ["error", "windows"] */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const ReservationScreen = () => {
  const vehicles = useSelector((state) => state.vehicles);
  const reservations = useSelector((state) => state.reservations);
  const [isVehicle, setIsVehicle] = useState(false);

  const defaultImage = 'https://firebasestorage.googleapis.com/v0/b/exo-cars-5611d.appspot.com/o/empty_car.jpg?alt=media&token=952474fe-a836-4a2e-8576-6961aac8d7e3';

  const getVehicle = (vehicleId) => {
    const vehicle = vehicles.find((vehicle) => vehicle.id === vehicleId);
    return vehicle;
  };

  useEffect(() => {
    if (vehicles.length) setIsVehicle(true);
  }, [vehicles]);

  return (
    <div className="container page-reservation">
      <div className="info-container">
        <h2>{`${JSON.parse(localStorage.getItem('current_user')).name}'s reservations`}</h2>
        <p>
          Know all future and past reservations made by you, know the selected vehicle
          and the date range you choose.
        </p>

        {(reservations.length === 0) && (
          <p className="no-reservations-message">No reservations yet</p>
        )}

        {
          isVehicle && reservations.map((item) => (
            <article key={item.id}>
              <div className="main-info">

                <Link to={`/models/${item.vehicle_id}`}>
                  <div className="reservation-photo">
                    <img
                      src={getVehicle(item.vehicle_id).galleries.length
                        ? getVehicle(item.vehicle_id).galleries[0].photo
                        : defaultImage}
                      alt="vehicle"
                    />
                  </div>
                </Link>
                <div className="car-data">
                  <h4>{getVehicle(item.vehicle_id).brand}</h4>
                  <h2 className="reservation-model">{getVehicle(item.vehicle_id).model}</h2>
                </div>

              </div>
              <div className="text-end">
                <p>{item.city}</p>
              </div>
              <div className="dateRange">
                <div>
                  <span>Start</span>
                  <p>{item.start_date}</p>
                </div>
                <div>
                  <span>End</span>
                  <p>{item.end_date}</p>
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </div>
  );
};

export default ReservationScreen;
