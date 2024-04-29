import axios from "axios";

const apiBaseUrl = "/api";

// 임시로 작성했습니다. 이후 수정!
export const api = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  timeout: 5000,
});
