import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import myContext from '../context/myContext';
import '../CSS/excluir.css';
import Button from './Button';

function TableTask({ handleDel }) {
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
