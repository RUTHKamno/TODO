import axios from 'axios';

const API = axios.create({ baseUrl: 'http://localhost:8080/api/' });
API.defaults.baseURL = 'http://localhost:8080/api/';
export default API;


