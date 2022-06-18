import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import TableTask from '../components/TableTask';
import myContext from '../context/myContext';
import { taskRequest, addTask } from '../connectionDB/index';

function Task() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const TaskRequestDB = async () => {
    const data = await taskRequest('/');
    setTasks(data);
  };

  const hancleClick = () => {
    if (input !== '') {
      addTask('/', { task: input, status: 'Pendente' });
      setInput('');
      TaskRequestDB();
    }
  };

  useEffect(() => {
    TaskRequestDB();
  }, []);

  const context = React.useMemo(() => ({
    input, setInput, tasks,
  }), [input, tasks]);

  return (
    <myContext.Provider value={context}>
      <Input />
      <Button hancleClick={hancleClick} />
      <div>
        <TableTask />
      </div>
    </myContext.Provider>
  );
}

export default Task;
