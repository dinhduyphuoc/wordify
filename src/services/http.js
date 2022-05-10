import axios, { AxiosError } from "axios";

export default {
  get: axios.get,
  post: axios.post,
  update: axios.update,
  delete: axios.delete,
};
