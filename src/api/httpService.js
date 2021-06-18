import axios from "axios";

// import { requestInterceptor, responseInterceptor, authErrorInterceptor } from "./persistentAuth";

const httpService = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

// httpService.interceptors.request.use(requestInterceptor);
// httpService.interceptors.response.use(responseInterceptor, authErrorInterceptor);

export default httpService;
