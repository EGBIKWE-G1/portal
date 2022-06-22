import axios from "axios";

// baseURL: `http://3.140.36.43:7200`
//baseURL: `https://sshop.woozeee.com`
//prod: `https://csapis.woozeee.com/api/v1`
const axiosInstance = axios.create({
  baseURL: `https://scsapis.woozeee.com`,
});

const token = localStorage.auth;

if (token) {
  axiosInstance.interceptors.request.use(
    function (config) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        channel: `web`,
      };
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
}

export default axiosInstance;
