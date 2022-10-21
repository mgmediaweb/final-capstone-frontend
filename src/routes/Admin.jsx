/* eslint linebreak-style: ["error", "windows"] */
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';

const AdminScreen = () => {
  const navigate = useNavigate();

  const vehicles = [
    {
      id: 1,
      photo: 'model1a.jpg',
      brand: 'Lamborghini',
      model: 'AVENTADOR LP 780-4 ULTIMAE',
      year: 2022,
    },
    {
      id: 2,
      photo: 'model2a.jpg',
      brand: 'Mazeratti',
      model: 'MC20 CIELO',
      year: 2019,
    },
  ];

  const addVehicle = () => {
    navigate('/admin/new', { replace: true }, [navigate]);
  };

  return (
    <div className="container page-admin">
      <div className="info-container">
        <Button
          btnAxn={addVehicle}
          label="Add"
        />
        <br />

        <table className="table-admin">
          <thead>
            <tr>
              <th>Id</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              vehicles.map((car) => (
                <tr key={car.id}>
                  <td className="text-center">{car.id}</td>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td className="text-center">{car.year}</td>
                  <td className="text-center">
                    <Link to={`/detail/${car.id}`} className="add-padding-horizontal">
                      Edit
                    </Link>
                    <Link to={`/detail/${car.id}`} className="add-padding-horizontal">
                      Delete
                    </Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminScreen;
