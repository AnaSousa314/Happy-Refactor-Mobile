import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.186.198:4000'
  // baseURL: 'http://localhost:4000'
  

});

export default api;