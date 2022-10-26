/* eslint linebreak-style: ["error", "windows"] */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ReservationScreen = () => {
  const vehicles = useSelector((state) => state.vehicles);
  const reservations = useSelector((state) => state.reservations);

  if (vehicles.length === 0 || reservations.length === 0) {
    window.location.href = '/models';
  }

  const getVehicle = (vehicleId) => {
    const vehicle = vehicles.find((vehicle) => vehicle.id === vehicleId);
    return vehicle;
  };

  return (
    <div className="container page-reservation">
      <div className="info-container">
        <h2>{`${JSON.parse(localStorage.getItem('current_user')).name}'s reservations`}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed interdum lorem.
          Quisque sed eleifend urna, in mattis lectus. Integer eu nulla ut libero gravida maximus.
          quam magna, mattis dignissim blandit nec, rhoncus non dui.
        </p>

        {(reservations.length === 0) && (
          <p className="no-reservations-message">No reservations yet</p>
        )}

        {
          reservations.map((item) => (
            <article key={item.id}>
              <div className="main-info">
                <Link to={`/models/${item.vehicle_id}`}>
                  <div className="reservation-photo">
                    <img
                      src={getVehicle(item.vehicle_id).galleries.length
                        ? getVehicle(item.vehicle_id).galleries[0].photo
                        : 'https://e7.pngegg.com/pngimages/935/767/png-clipart-silhouette-racing-car-silhouette-racing-car-commercial-carnivoran-photography-thumbnail.png'}
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
