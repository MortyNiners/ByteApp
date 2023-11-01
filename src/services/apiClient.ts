import axios from 'axios';

export const API_URL = 'http://localhost:3000';
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      config.headers['Authorization'] = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export const apiGet = axiosInstance.get;
export const apiPost = axiosInstance.post;
export const apiPut = axiosInstance.put;
export const apiDelete = axiosInstance.delete;
