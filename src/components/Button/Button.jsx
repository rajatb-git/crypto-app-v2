import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ text, onClick, icon }) => {
  const clickHandler = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={icon ? 'button-icon' : 'button-regular'}
      onClick={clickHandler}
      name={text}
    >
      {icon || text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.element
};

export default Button;
