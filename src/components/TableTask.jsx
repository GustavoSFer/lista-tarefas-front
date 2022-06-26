import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { updateTask } from '../connectionDB';
import myContext from '../context/myContext';
import '../CSS/excluir.css';
import Button from './Button';

function TableTask({ handleDel }) {
  const { tasks, setOrdenar } = useContext(myContext);
  const statusTask = ['Pendente', 'Em andamento', 'Pronto'];

  const statusTeste = (task) => {
    const posicao = statusTask.indexOf(task.status);
    if (posicao < statusTask.length - 1) {
      const db = {
        id: task._id,
        task: task.task,
        status: statusTask[posicao + 1],
      };
      updateTask('/', db);
    } else {
      const db = {
        id: task._id,
        task: task.task,
        status: statusTask[0],
      };
      updateTask('/', db);
    }
  };

  return (
    <table className="table table-bordered">
      <thead className="bg-success txtCenter">
        <tr>
          <th>
            <button
              type="button"
              className="btn btn-success ps-4 pe-4"
              onClick={(() => {
                setOrdenar('task');
              })}
            >
              Tarefa
            </button>
          </th>
          <th>
            <button
              type="button"
              className="btn btn-success ps-4 pe-4"
              onClick={(() => {
                setOrdenar('status');
              })}
            >
              Status
            </button>
          </th>
          <th>
            <button
              type="button"
              className="btn btn-success ps-4 pe-4"
              onClick={(() => {
                setOrdenar('');
              })}
            >
              Excluir
            </button>
          </th>
        </tr>
      </thead>
      <tbody className="txtCenter">
        {
          !tasks ? <h2>Sem tarefas cadastradas!</h2> : tasks.map((task) => (
            <tr key={task.task}>
              <td>{task.task}</td>
              <td>
                <Button handleClick={() => statusTeste(task)}>
                  {task.status}
                </Button>
              </td>
              {/* eslint no-underscore-dangle: 0 */}
              <Button
                handleClick={handleDel}
              >
                <td className="excluir" id={task._id} />
              </Button>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

TableTask.propTypes = {
  handleDel: PropTypes.func.isRequired,
};

export default TableTask;
