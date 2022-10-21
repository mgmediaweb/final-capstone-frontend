/* eslint linebreak-style: ["error", "windows"] */
import PropTypes from 'prop-types';
import {
  FaArrowCircleRight,
  FaCalendarAlt,
  FaCheck,
} from 'react-icons/fa';
import './Button.scss';

const Button = (props) => {
  const {
    btnAxn,
    color,
    iconStart,
    iconEnd,
    label,
    size,
    value,
  } = props;

  return (
    <button
      type="button"
      className={`${size} color-${color}`}
      onClick={() => btnAxn(value)}
    >
      {iconStart === 'calendar' && <FaCalendarAlt className="icon icon-start" />}
      {label}
      {iconEnd === 'arrow' && <FaArrowCircleRight className="icon icon-end" />}
      {iconEnd === 'check' && <FaCheck className="icon icon-end" />}
    </button>
  );
};

Button.propTypes = {
  btnAxn: PropTypes.func.isRequired,
  color: PropTypes.string,
  iconStart: PropTypes.string,
  iconEnd: PropTypes.string,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  value: PropTypes.string,
};

Button.defaultProps = {
  color: 'primary',
  iconStart: null,
  iconEnd: null,
  size: 'normal',
  value: null,
};

export default Button;
