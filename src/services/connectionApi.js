import axios from 'axios';

import { baseURL } from '../utils/BaseUrl';

const connectionApi = axios.create({
  baseURL,
});

export default connectionApi;
