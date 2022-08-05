import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import myContext from '../context/myContext';
import '../CSS/excluir.css';
import Button from './Button';

function TableTask({ handleDel, statusOptions }) {
  const { tasks, setOrdenar } = useContext(myContext);

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
            <tr key={task._id}>
              <td>{task.task}</td>
              <td>
                <Button
                  handleClick={() => statusOptions(task)}
                >
                  {task.status}
                </Button>
              </td>
              {/* eslint no-underscore-dangle: 0 */}
              <td id={task._id}>
                <Button
                  handleClick={() => handleDel(task._id)}
                  id={task._id}
                >
                  <div className="excluir" />
                </Button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

TableTask.propTypes = {
  handleDel: PropTypes.func.isRequired,
  statusOptions: PropTypes.func.isRequired,
};

export default TableTask;
