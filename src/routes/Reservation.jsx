/* eslint linebreak-style: ["error", "windows"] */
import { Link } from 'react-router-dom';

const ReservationScreen = () => {
  const reservations = [
    {
      vehicle_id: 1,
      vehicle_photo: 'model1a.jpg',
      vehicle_brand: 'Lamborghini',
      vehicle_model: 'AVENTADOR LP 780-4 ULTIMAE',
      start_date: 'Oct 18. 2022',
      end_date: 'Oct 26. 2022',
    },
    {
      vehicle_id: 2,
      vehicle_photo: 'model2a.jpg',
      vehicle_brand: 'Mazeratti',
      vehicle_model: 'MC20 CIELO',
      start_date: 'Oct 18. 2022',
      end_date: 'Oct 26. 2022',
    },
  ];

  return (
    <div className="container page-reservation">
      <div className="info-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed interdum lorem.
          Quisque sed eleifend urna, in mattis lectus. Integer eu nulla ut libero gravida maximus.
          quam magna, mattis dignissim blandit nec, rhoncus non dui.
        </p>

        {
          reservations.map((item) => (
            <article key={item.vehicle_id}>
              <div className="main-info">
                <div
                  className="photo"
                  style={{ backgroundImage: `url(/assets/vehicles/${item.vehicle_photo})` }}
                />
                <span>
                  <p>{item.vehicle_brand}</p>
                  <h2>
                    <Link to={`/detail/${item.vehicle_id}`}>
                      {item.vehicle_model}
                    </Link>
                  </h2>
                </span>
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
