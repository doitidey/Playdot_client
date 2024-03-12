import axios, { AxiosRequestConfig } from "axios";

// 공용 컨피그
const instanceConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

// 로그인 컨피그
const authConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

export const authInstance = axios.create(authConfig);
export const instance = axios.create(instanceConfig);
