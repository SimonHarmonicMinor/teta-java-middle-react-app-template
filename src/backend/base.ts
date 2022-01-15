import axios, {AxiosRequestConfig} from "axios";
import TokenStorage from "./token";

export const axiosNoAuth = axios.create();

export const axiosAuth = axios.create();

axiosAuth.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers.Authorization = TokenStorage.getToken();
  return config;
})