import axios, { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

export const API_URL = '/api';
const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
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
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const navigate = useNavigate();
    if (error.response && error.response.status === 401) {
      navigate('/login');
    }
    return Promise.reject(error);
  },
);

export const apiGet = axiosInstance.get;
export const apiPost = axiosInstance.post;
export const apiPut = axiosInstance.put;
export const apiDelete = axiosInstance.delete;
