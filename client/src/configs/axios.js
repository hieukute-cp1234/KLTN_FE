import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL_LOCAL } from "../constants/config.js";

export const appApi = axios.create({
  baseURL: BASE_URL_LOCAL,
});

appApi.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      // window.location = "/login";
    }
    return config;
  },
  (error) => Promise.reject(error)
);

appApi.interceptors.response.use(
  (response) => {
    if (response?.data?.message) {
      Swal.fire({
        icon: "success",
        text: response?.data?.message || "success!",
      });
    }
    return response?.data?.data;
  },
  async (error) => {
    if (error.response?.data?.message) {
      Swal.fire({
        icon: "error",
        text: error.response?.data?.message || "Đã xảy ra lỗi!",
      });
    }
    return Promise.reject(error.response.data);
  }
);
