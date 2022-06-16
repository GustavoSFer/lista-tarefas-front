import React, { useContext } from 'react';
import myContext from '../context/myContext';

function Button() {
  const { setInput } = useContext(myContext);
  const hancleClick = () => {
    setInput('');
  };

  return (
    <button type="button" onClick={hancleClick}>Salvar</button>
  );
}

export default Button;
