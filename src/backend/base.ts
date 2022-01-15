import axios, { AxiosRequestConfig } from 'axios';
import TokenStorage from './token';

export const axiosNoAuth = axios.create();

export const axiosAuth = axios.create();

axiosAuth.interceptors.request.use((config: AxiosRequestConfig) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${TokenStorage.getToken()}`;
  return config;
});
