import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

// endpoint é o caminha que queremos -> ex: '/'; '/:id' ...
const taskRequest = async (endpoint) => {
  // O retorno vem um obj que o resultado fica dentro de data
  const { data } = await axios.get((baseURL + endpoint));
  return data;
};

const addTask = async (endpoint, body) => {
  await axios.post((baseURL + endpoint), body);
};

const updateTask = async (endpoint, body) => {
  await axios.put((baseURL + endpoint), body);
};

const removeTask = async (endpoint, params) => {
  await axios.delete(`${baseURL}${endpoint}${params}`);
};

export {
  taskRequest,
  addTask,
  updateTask,
  removeTask,
};
