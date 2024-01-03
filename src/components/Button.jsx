// Button.js
import React from 'react';
import PropTypes from 'prop-types';
import '../components/styles.css';
const Button = ({ onClick, disabled, label }) => {
  return (
    <button
      type="button"
      className="button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;

