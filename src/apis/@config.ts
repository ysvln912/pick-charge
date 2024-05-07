/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosError } from "axios";
import TokenService from "@/utils/tokenService";

const apiBaseUrl = "/api";

export const api = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  timeout: 3000,
});

// 요청
api.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답
api.interceptors.response.use(
  (response) => {
    return response;
  },

  (error: AxiosError) => {
    if (error?.response?.status === 401) {
      TokenService.removeToken();
    }

    return Promise.reject(error);
  }
);
