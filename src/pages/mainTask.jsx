import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import TableTask from '../components/TableTask';
import myContext from '../context/myContext';
import {
  taskRequest,
  addTask,
  removeTask,
  updateTask,
} from '../connectionDB/index';

function Task() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [ordenar, setOrdenar] = useState('');

  const ordenacaoTask = (lista, type) => {
    if (type !== '') {
      const filtro = [...lista].sort((a, b) => {
        if (a[type] < b[type]) {
          return -1;
        }
        if (a[type] > b[type]) {
          return 1;
        }
        return 0;
      });
      return filtro;
    }
    return lista;
  };

  const TaskRequestDB = async () => {
    const data = await taskRequest('/');
    const listOrder = ordenacaoTask(data, ordenar);
    setTasks(listOrder);
  };

  const statusOptions = async (task) => {
    const statusTask = ['Pendente', 'Em andamento', 'Pronto'];
    const posicao = statusTask.indexOf(task.status);

    const status = (posicao < statusTask.length - 1)
      ? statusTask[posicao + 1]
      : statusTask[0];

    const db = {
      /* eslint no-underscore-dangle: 0 */
      id: task._id,
      task: task.task,
      status,
    };
    await updateTask('/', db);
    TaskRequestDB();
  };

  const handleDel = async (id) => {
    await removeTask('/', id);
    TaskRequestDB();
  };

  const handleClick = async () => {
    if (input !== '') {
      await addTask('/', { task: input, status: 'Pendente' });
      setInput('');
      TaskRequestDB();
    }
  };

  useEffect(() => {
    TaskRequestDB();
  }, [ordenar]);

  const context = React.useMemo(() => ({
    input, setInput, tasks, setOrdenar, TaskRequestDB,
  }), [input, tasks]);

  return (
    <myContext.Provider value={context}>
      <div className="container mt-4 mb-4">
        <div className="input-group mb-3">
          <Input />
          <Button handleClick={handleClick}>Salvar</Button>
        </div>
        <div className="d-flex">
          <TableTask
            handleDel={handleDel}
            optionOrder={ordenacaoTask}
            statusOptions={statusOptions}
          />
        </div>
      </div>
    </myContext.Provider>
  );
}

export default Task;
