import axios from 'axios';
const beUrl = import.meta.env.VITE_TRIP_URL_DEV;
console.log('Backend URL:', beUrl);

const BASE_URL = `${beUrl}/api/trip/admin`;

const axiosBaseInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

axiosBaseInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axiosBaseInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },

  // Handle 401 responses globally
  function (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default axiosBaseInstance;
