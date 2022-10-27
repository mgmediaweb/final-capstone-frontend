/* eslint linebreak-style: ["error", "windows"] */
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UploadImages from '../../components/uploadimages/UploadImages';
import Button from '../../components/button/Button';

const AdminScreen = () => {
  const vehicles = useSelector((state) => state.vehicles);
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

  const showUpload = (car = null) => {
    if (car) setvehicleSelected(car);
    setUploadVisible(!uploadVisible);
  };

  const addVehicle = () => navigate('/admin/new', { replace: true }, [navigate]);

  const deleteVehicle = async (vehicle) => {
    const deleteCar = {
      method: 'DELETE',
      headers: {
        Authorization: JSON.parse(localStorage.getItem('current_user')).token,
      },
    };

    await fetch(`https://elsonotake-backend.herokuapp.com/api/v1/vehicles/${vehicle.id}`, deleteCar);
    window.location.href = '/models';
  };

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
                <p>{`${car.year}. ${car.brand} ${car.model} - Rent price: ${car.price}(USD)`}</p>
              </div>
              <div className="action-btn text-end">
                <Button
                  btnAxn={showUpload}
                  label="Images"
                  value={car}
                  size="small"
                />
                <Button
                  btnAxn={deleteVehicle}
                  label="Delete"
                  value={{ id: car.id }}
                  size="small"
                />
              </div>
            </article>
          ))
        }
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
