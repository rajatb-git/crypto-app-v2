import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({
  label, id, ...rest
}) => (
  <div className="input">
    { label && <label className="input__label" htmlFor={id}>{label}</label> }

    <input
      id={id}
      className="input__control"
      {...rest}
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string
};

export default Input;
