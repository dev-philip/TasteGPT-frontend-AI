import axios from "axios";
import { useAuthStore } from "@/store/auth";
import { VITE_API_BASE_URL } from "@/utils/constants";

function getAxiosInstance() {
  const instance = axios.create({
    baseURL: VITE_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const { token: accessToken } = useAuthStore.getState();

      console.log("Axios request interceptor triggered");
      console.log("Current access token:", accessToken);
      console.log("Request config before modification:", config);

      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
}

export const axiosInstance = getAxiosInstance();
