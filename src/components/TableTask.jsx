import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import myContext from '../context/myContext';
import '../CSS/excluir.css';
import Button from './Button';

function TableTask({ handleDel, optionOrder }) {
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
                optionOrder();
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
                optionOrder();
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
                optionOrder();
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
              <td>{task.status}</td>
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
  optionOrder: PropTypes.func.isRequired,
};

export default TableTask;
