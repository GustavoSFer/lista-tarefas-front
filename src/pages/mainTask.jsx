import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import TableTask from '../components/TableTask';
import myContext from '../context/myContext';
import { taskRequest, addTask, removeTask } from '../connectionDB/index';

function Task() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [del, setDel] = useState(false);

  const TaskRequestDB = async () => {
    const data = await taskRequest('/');
    setTasks(data);
  };

  const handleDel = ({ target }) => {
    setDel(!del);
    removeTask('/', target.id);
    TaskRequestDB();
  };

  const handleClick = () => {
    if (input !== '') {
      addTask('/', { task: input, status: 'Pendente' });
      setInput('');
      TaskRequestDB();
    }
  };

  useEffect(() => {
    TaskRequestDB();
  }, [input, del]);

  const context = React.useMemo(() => ({
    input, setInput, tasks,
  }), [input, tasks]);

  return (
    <myContext.Provider value={context}>
      <Input />
      <Button handleClick={handleClick}>Salvar</Button>
      <div>
        <TableTask handleDel={handleDel} />
      </div>
    </myContext.Provider>
  );
}

export default Task;
