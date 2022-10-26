/* eslint linebreak-style: ["error", "windows"] */
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UploadImages from '../../components/uploadimages/UploadImages';
import Button from '../../components/button/Button';

const AdminScreen = () => {
  const navigate = useNavigate();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [vehicleSelected, setvehicleSelected] = useState({ id: 0, model: 'undefined' });
  const [isIntruder, setIsIntruder] = useState(true);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('current_user')).role === 'admin') {
      setIsIntruder(false);
    } else {
      setIsIntruder(true);
    }
  }, []);

  const vehicles = useSelector((state) => state.vehicles);

  const showUpload = (car = null) => {
    if (car) setvehicleSelected(car);
    setUploadVisible(!uploadVisible);
  };

  const addVehicle = () => navigate('/admin/new', { replace: true }, [navigate]);

  if (isIntruder) {
    return (
      <div className="container page-admin">
        <h1>You need admin access for this page</h1>
      </div>
    );
  }

  return (
    <div className="container page-admin">
      <div className="info-container">
        <Button
          btnAxn={addVehicle}
          label="Add"
        />
        <br />

        {
          vehicles.map((car) => (
            <article key={car.id}>
              <div className="main-info">
                <p>{`${car.id}. ${car.brand} ${car.model}`}</p>
              </div>
              <div className="text-end">
                <Button
                  btnAxn={showUpload}
                  label="Images"
                  value={car}
                  size="small"
                />
                <Link to={`/admin/edit/${car.id}`} className="add-padding-horizontal">
                  Edit
                </Link>

                <Link to={`/admin/edit/${car.id}`} className="add-padding-horizontal">
                  Delete
                </Link>
              </div>
            </article>
          ))
        }

        <table className="table-admin" style={{ display: 'none' }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Cover</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Year</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              vehicles.map((car) => (
                <tr key={car.id}>
                  <td className="text-center">{car.id}</td>
                  <td>image</td>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td className="text-center">{car.year}</td>
                  <td className="text-center">
                    <Button
                      btnAxn={showUpload}
                      label="Upload"
                      value={car}
                      size="small"
                    />
                  </td>
                  <td className="text-center">
                    <Link to={`/admin/edit/${car.id}`} className="add-padding-horizontal">
                      Edit
                    </Link>

                    <Link to={`/admin/edit/${car.id}`} className="add-padding-horizontal">
                      Delete
                    </Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <UploadImages
        btnAxn={showUpload}
        state={uploadVisible}
        vehicle={vehicleSelected}
      />
    </div>
  );
};

export default AdminScreen;
