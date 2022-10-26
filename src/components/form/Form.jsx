/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint linebreak-style: ["error", "windows"] */

const Form = () => (
  <fragment>
    <div className="grid-display grid-simple">
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
    </div>

    <div className="grid-display grid-double">
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

      <div className="add-margin-below grid-double">
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
    </div>

    <div className="grid-display grid-double">
      <div className="add-margin-below grid-double">
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

      <div className="add-margin-below">
        <label htmlFor="color">Color</label>
        <select
          name="color"
          className="form-field"
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
    </div>

    <h3>Technical Specs</h3>

    <div className="grid-display grid-cuadra">
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
        <label htmlFor="maxSpeed">Max Speed</label>
        <input
          type="text"
          id="maxSpeed"
          name="maxSpeed"
          placeholder="355 km/h"
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

      <div className="add-margin-below">
        <label htmlFor="price">Price(USD)</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="100"
          className="form-field"
          required
        />
      </div>
    </div>

    <h3>Description</h3>

    <div className="add-margin-below">
      <textarea
        name="description"
        className="form-field"
        required
      />
    </div>
  </fragment>
);

export default Form;
