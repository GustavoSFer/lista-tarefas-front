import React, { useState } from 'react';
import Input from '../components/Input';
import myContext from '../context/myContext';

function Task() {
  const [input, setInput] = useState('');

  const context = React.useMemo(() => ({
    input, setInput,
  }), [input]);

  return (
    <myContext.Provider value={context}>
      Pagina principal
      <Input />
    </myContext.Provider>
  );
}

export default Task;
