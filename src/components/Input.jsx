import React, { useContext } from 'react';
import myContext from '../context/myContext';

function Input() {
  const { setInput, input } = useContext(myContext);

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  return (
    <input type="text" placeholder="Digite a tarefa" onChange={handleChange} value={input} />
  );
}

export default Input;
