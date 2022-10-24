/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint linebreak-style: ["error", "windows"] */
import PropTypes from 'prop-types';
import './Gallery.scss';

const Gallery = (props) => {
  const { data, btnAxn } = props;

  return (
    <div className="slider">
      {
        data.map((photo) => (
          <div
            key={photo}
            onClick={() => btnAxn(photo.photo)}
            style={{ backgroundImage: `url(${photo.photo})` }}
          />
        ))
      }
    </div>
  );
};

Gallery.propTypes = {
  btnAxn: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default Gallery;
