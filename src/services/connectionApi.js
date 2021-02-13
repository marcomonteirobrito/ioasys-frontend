import axios from 'axios';

import { baseURL } from '../commons/BaseUrl';

const connectionApi = axios.create({
  baseURL,
});

export default connectionApi;
