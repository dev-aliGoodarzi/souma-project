// Axios
import axios from "axios";
// Axios

// Constants
import { baseUrlV1 } from "./_axios.constants";
// Constants

// InterceptorsConfig
import { AxiosInterceptorsConfigAttachFunctions } from "./_axios.interceptors";
// InterceptorsConfig

export const _axios = axios.create({
  baseURL: baseUrlV1,
  timeout: 12000,
});

AxiosInterceptorsConfigAttachFunctions(_axios);
