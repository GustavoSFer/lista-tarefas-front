import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

// endpoint é o caminha que queremos -> ex: '/'; '/:id' ...
const taskRequest = async (endpoint) => {
  const { result } = axios.get((baseURL + endpoint));

  return result;
};

const addTask = async (endpoint, body) => {
  console.log(endpoint, body);
  axios.post((baseURL + endpoint), body);
};

export {
  taskRequest,
  addTask,
};
