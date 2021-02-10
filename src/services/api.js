import axios from 'axios';

const api = axios.create({
  baseURL: 'http://books.ioasys.com.br/api/v1',
});

export default api;
