import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // or backend URL
  withCredentials: true, // required for refresh cookies
});

export default api;
