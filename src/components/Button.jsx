import React, { useContext } from 'react';
import myContext from '../context/myContext';
import { addTask } from '../connectionDB';

function Button() {
  const { input, setInput } = useContext(myContext);
  const hancleClick = () => {
    addTask('/', { task: input, status: 'Pendente' });
    setInput('');
  };

  return (
    <button type="button" onClick={hancleClick}>Salvar</button>
  );
}

export default Button;
