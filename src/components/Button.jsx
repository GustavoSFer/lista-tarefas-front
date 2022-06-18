import React from 'react';
import PropTypes from 'prop-types';

function Button({ hancleClick }) {
  return (
    <button type="button" onClick={hancleClick}>Salvar</button>
  );
}

Button.propTypes = {
  hancleClick: PropTypes.func.isRequired,
};

export default Button;
