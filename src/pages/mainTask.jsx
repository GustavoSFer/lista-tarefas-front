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
  const [ordenar, setOrdenar] = useState('');

  const TaskRequestDB = async () => {
    const data = await taskRequest('/');
    setTasks(data);
  };

  const ordenacaoTask = () => {
    if (ordenar === 'task') {
      const filtro = [...tasks].sort((a, b) => {
        if (a.task < b.task) {
          return -1;
        }
        if (a.task > b.task) {
          return 1;
        }
        return 0;
      });
      setTasks(filtro);
    } else if (ordenar === 'status') {
      if (ordenar === 'status') {
        const filtro = [...tasks].sort((a, b) => {
          if (a.status < b.status) {
            return -1;
          }
          if (a.status > b.status) {
            return 1;
          }
          return 0;
        });
        setTasks(filtro);
      }
    }
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
    input, setInput, tasks, setOrdenar,
  }), [input, tasks, ordenar]);

  return (
    <myContext.Provider value={context}>
      <div className="container mt-4 mb-4">
        <div className="input-group mb-3">
          <Input />
          <Button handleClick={handleClick}>Salvar</Button>
        </div>
        <div className="d-flex">
          <TableTask handleDel={handleDel} optionOrder={ordenacaoTask} />
        </div>
      </div>
    </myContext.Provider>
  );
}

export default Task;
