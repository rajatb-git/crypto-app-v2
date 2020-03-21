import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label, text, type, id, defaultValue, handleChange, placeholder
}) => (
  <div className="form-group">
    { label && <label htmlFor={label}>{text}</label> }

    <input
      type={type}
      className="form-control"
      id={id}
      defaultValue={defaultValue}
      onChange={handleChange}
      placeholder={placeholder}
      required
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default Input;
