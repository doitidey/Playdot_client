import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "https://api.tmbservice.net/";

const authConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

const todayConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

export const authInstance = axios.create(authConfig);
export const todayInstance = axios.create(todayConfig);
