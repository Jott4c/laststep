import axios from "axios";

const api = axios.create({
  baseURL: "https://laststep.onrender.com/api/",
  timeout: 15000,
});

export default api;
