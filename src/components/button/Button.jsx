import PropTypes from 'prop-types';
import {
  FaCalendarAlt,
  FaArrowCircleRight,
} from 'react-icons/fa';
import './Button.scss';

const Button = (props) => {
  const {
    btnAxn,
    iconStart,
    iconEnd,
    label,
    size,
    value,
  } = props;

  const axn = (value) => btnAxn(value);

  return (
    <button
      type="button"
      className={size}
      onClick={() => axn(value)}
    >
      {iconStart === 'calendar' && <FaCalendarAlt className="icon icon-start" />}
      {label}
      {iconEnd === 'arrow' && <FaArrowCircleRight className="icon icon-end" />}
    </button>
  );
};

Button.propTypes = {
  btnAxn: PropTypes.func.isRequired,
  iconStart: PropTypes.string,
  iconEnd: PropTypes.string,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  iconStart: null,
  iconEnd: null,
  size: 'normal',
};

export default Button;
