import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.API_URL_BASE,
});

export default httpClient;
