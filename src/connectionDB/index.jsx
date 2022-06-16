import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

// endpoint é o caminha que queremos -> ex: '/'; '/:id' ...
const taskRquest = async (endpoint) => {
  const { result } = axios.get((baseURL + endpoint));

  return result;
};

export default {
  taskRquest,
};
