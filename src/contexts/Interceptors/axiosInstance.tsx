import axios from 'axios';
// creo instancia de axios
const axiosInstance = axios.create({
    baseURL: 'https://dummyapi.io/data/v1',
  });
  // creo interceptor para agregar app-id en los request
  axiosInstance.interceptors.request.use(
    config => {
      config.headers['app-id'] = `624c9429450430b574dcf17c`;
      return config;
    },
    error => {}
);
// Expongo la instancia de axios para usar de forma global
export default axiosInstance;