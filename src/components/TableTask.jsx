import React, { useState, useEffect } from 'react';
import { taskRequest } from '../connectionDB/index';
// import excluir from '../image/excluir.png';
import '../CSS/excluir.css';

function TableTask() {
  const [tasks, setTasks] = useState([]);

  const TaskRequestDB = async () => {
    const data = await taskRequest('/');
    setTasks(data);
  };

  useEffect(() => {
    TaskRequestDB();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Tarefa</th>
          <th>status</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {
          !tasks ? <h2>Sem tarefas cadastradas!</h2> : tasks.map((task) => (
            <tr key={task.task}>
              <td>{task.task}</td>
              <td>{task.status}</td>
              <td className="excluir" />
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default TableTask;
