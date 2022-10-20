/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import './Slider.scss';

const Slider = (props) => {
  const { data, btnAxn } = props;

  return (
    <div className="slider">
      {
        data.map((photo) => (
          <div
            key={photo}
            onClick={() => btnAxn(photo)}
            style={{ backgroundImage: `url(/assets/vehicles/${photo})` }}
          />
        ))
      }
    </div>
  );
};

Slider.propTypes = {
  btnAxn: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default Slider;
