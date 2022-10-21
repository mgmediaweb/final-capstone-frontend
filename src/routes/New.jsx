/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint linebreak-style: ["error", "windows"] */
import { Link } from 'react-router-dom';
import Button from '../components/button/Button';

const NewScreen = () => {
  const formSubmit = () => {
    console.log('sending');
  };

  return (
    <div className="container page-admin">
      <div className="info-container">
        <h1>Add new car</h1>

        <div className="add-margin-below">
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            placeholder="Ferrari"
            className="form-field"
            required
          />
        </div>

        <div className="add-margin-below">
          <label htmlFor="brand">Model</label>
          <input
            type="text"
            id="model"
            name="model"
            placeholder="Testarossa"
            className="form-field"
            required
          />
        </div>

        <div className="add-margin-below">
          <label htmlFor="year">Year</label>
          <input
            type="text"
            id="year"
            name="year"
            placeholder="2018"
            className="form-field"
            required
          />
        </div>

        <div className="add-margin-below">
          <label htmlFor="vehicle">Color</label>
          <select
            name="vehicle"
            className="form-field"
            // defaultValue={vehicle || ''}
            required
          >
            <option value="">Select one</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Brown">Brown</option>
            <option value="Carbon">Carbon</option>
            <option value="Green">Green</option>
            <option value="Orange">Orange</option>
            <option value="Red">Red</option>
            <option value="Silver">Silver</option>
            <option value="Yellow">Yellow</option>
            <option value="White">White</option>
          </select>
        </div>

        <div className="add-margin-below">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Italia"
            className="form-field"
            required
          />
        </div>

        <h3>Technical Specs</h3>

        <div className="add-margin-below">
          <label htmlFor="power">Power</label>
          <input
            type="text"
            id="power"
            name="power"
            placeholder="780 CV (574 kW)"
            className="form-field"
            required
          />
        </div>

        <div className="add-margin-below">
          <label htmlFor="max_speed">Max Speed</label>
          <input
            type="text"
            id="max_speed"
            name="max_speed"
            placeholder="780 CV (574 kW)"
            className="form-field"
            required
          />
        </div>

        <div className="add-margin-below">
          <label htmlFor="acceleration">Acceleration</label>
          <input
            type="text"
            id="acceleration"
            name="acceleration"
            placeholder="9.8s"
            className="form-field"
            required
          />
        </div>

        <h3>Description</h3>

        <div className="add-margin-below">
          <textarea
            name="description"
            className="form-field"
            required
          />
        </div>

        <Link to="/admin">
          Back to admin
        </Link>

        <Button
          btnAxn={formSubmit}
          label="Save"
        />
      </div>
    </div>
  );
};

export default NewScreen;
