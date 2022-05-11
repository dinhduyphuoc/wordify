import axios, { AxiosError } from "axios";

axios.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  update: axios.update,
  delete: axios.delete,
};
