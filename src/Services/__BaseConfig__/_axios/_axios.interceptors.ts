// Axios
import { AxiosInstance } from "axios";
// Axios

export const AxiosInterceptorsConfigAttachFunctions = (
  _axios: AxiosInstance
) => {
  _axios.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  _axios.interceptors.response.use(
    (res) => res,
    async (err) => {
      return Promise.reject(err);
    }
  );

  return _axios;
};
