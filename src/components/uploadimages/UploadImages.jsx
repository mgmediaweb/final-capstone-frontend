/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint linebreak-style: ["error", "windows"] */
import React, { useRef, useState, useEffect } from 'react';
import CircleLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';
import {
  FaCheck,
  FaTimes,
} from 'react-icons/fa';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import storage from '../../Firebase';
import './UploadImages.scss';
import Button from '../button/Button';

const UploadImages = (props) => {
  const {
    btnAxn,
    state,
    vehicle,
  } = props;

  const [gallery, setGallery] = useState(null);
  const [status, setStatus] = useState('success');

  const form = useRef();
  const screen = useRef();

  const handleImages = (e) => setGallery(e.target.files[0]);

  const closePanel = () => {
    btnAxn(!state);
    setTimeout(() => setStatus('form'), 1000);
  };

  const goBack = () => setStatus('form');

  const apiConnection = async (photoToPublish) => {
    const body = { photo: photoToPublish };
    const url = `https://elsonotake-backend.herokuapp.com/api/v1/vehicles/${vehicle.id}/galleries`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: JSON.stringify(body),
    });

    if (response.status === 200) setStatus('success');
    else setStatus('error');
    setGallery(null);
  };

  const sendForm = () => {
    if (gallery === null) {
      setStatus('error');
      return;
    }

    setStatus('waiting');
    const rnd = Math.round(Math.random() * (999 - 100) + 100);
    const imageRef = ref(storage, `image${vehicle.id}_${rnd}`);

    uploadBytes(imageRef, gallery)
      .then((snapshot) => getDownloadURL(snapshot.ref))
      .then((downloadURL) => apiConnection(downloadURL));
  };

  const ScreenError = () => (
    <>
      <FaTimes size={40} />
      <p>Error, try Again</p>
      <div className="form-bottom-bar">
        <Button btnAxn={goBack} label="Back" color="dark" />
      </div>
    </>
  );

  const ScreenSuccess = () => (
    <>
      <FaCheck size={40} />
      <p>Success</p>
      <div className="form-bottom-bar">
        <Button btnAxn={goBack} label="Upload another" color="dark" />
      </div>
    </>
  );

  useEffect(() => setStatus('form'), []);

  return (
    <div className={state ? 'panel panel-show' : 'panel panel-hide'}>
      <div
        className="closeBtn"
        onClick={() => closePanel()}
      >
        <FaTimes className="icon" />
      </div>
      <h2>IMAGES</h2>
      <div ref={screen} className="centerForm">
        { status === 'form'
          && (
          <form ref={form} action="#" method="post" encType="multipart/form-data">
            <h3 className="text-center">{vehicle.model}</h3>
            <br />

            <div className="add-margin-below">
              <label htmlFor="image">Search on your computer</label>
              <input
                type="file"
                id="image"
                name="image"
                className="form-field"
                onChange={handleImages}
              />
            </div>

            <div className="form-bottom-bar">
              <Button
                btnAxn={sendForm}
                label="Upload"
                size="main"
                color="dark"
              />
            </div>
          </form>
          )}
        { status === 'waiting' && <CircleLoader color="#fffff" size={60} /> }
        { status === 'success' && <ScreenSuccess /> }
        { status === 'error' && <ScreenError /> }
      </div>
    </div>
  );
};

UploadImages.propTypes = {
  btnAxn: PropTypes.func.isRequired,
  state: PropTypes.bool,
  vehicle: PropTypes.object,
};

UploadImages.defaultProps = {
  state: false,
  vehicle: { id: 0, model: 'undefined' },
};

export default UploadImages;
