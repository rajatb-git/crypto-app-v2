import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ text, onClick, icon, type }) => {
  const clickHandler = (e) => {
    if (typeof onClick === 'function') {
      onClick(e);
    }
  };

  return (
    <button
      type="button"
      className={`${type === 'icon' ? 'button-icon' : 'button-regular'} button`}
      onClick={(e) => clickHandler(e)}
      title={text}
    >
      {icon}
      {type === 'icon' ? '' : text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  type: PropTypes.string
};

export default Button;
