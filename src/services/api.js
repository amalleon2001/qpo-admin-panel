import axios from 'axios';
const beUrl = import.meta.env.VITE_TRIP_URL;

const BASE_URL = `${beUrl}/api/trip/admin`;

const axiosTripInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

axiosTripInstance.interceptors.request.use(
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
axiosTripInstance.interceptors.response.use(
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

const driverUrl = import.meta.env.VITE_DRIVER_URL;
const DRIVER_BASE_URL = `${driverUrl}/api/driver/admin`;

const axiosDriverInstance = axios.create({
  baseURL: DRIVER_BASE_URL,
  withCredentials: false,
});

axiosDriverInstance.interceptors.request.use(
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
axiosDriverInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

const riderUrl = import.meta.env.VITE_RIDER_URL;
const RIDER_BASE_URL = `${riderUrl}/api/admin/rider`;

const axiosRiderInstance = axios.create({
  baseURL: RIDER_BASE_URL,
  withCredentials: false,
});

axiosRiderInstance.interceptors.request.use(
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
axiosRiderInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export { axiosDriverInstance, axiosRiderInstance };
export default axiosTripInstance;
