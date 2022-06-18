import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

// endpoint é o caminha que queremos -> ex: '/'; '/:id' ...
const taskRequest = async (endpoint) => {
  // O retorno vem um obj que o resultado fica dentro de data
  const { data } = await axios.get((baseURL + endpoint));

  return data;
};

const addTask = async (endpoint, body) => {
  console.log(endpoint, body);
  axios.post((baseURL + endpoint), body);
};

export {
  taskRequest,
  addTask,
};
