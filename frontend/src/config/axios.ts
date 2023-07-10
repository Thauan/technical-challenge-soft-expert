import axios from 'axios'

let axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API_URL}`,
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },
})

axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error: any) {
  return Promise.reject(error);
});

export default axiosInstance;