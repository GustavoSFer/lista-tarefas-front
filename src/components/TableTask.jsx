import React, { useContext } from 'react';
import myContext from '../context/myContext';
import '../CSS/excluir.css';

function TableTask() {
  const { tasks } = useContext(myContext);

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
