import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, handleClick }) {
  return (
    <button type="button" className="btn" onClick={handleClick}>{children}</button>
  );
}

Button.defaultProps = { children: '' };
Button.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
