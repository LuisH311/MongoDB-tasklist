import axios from "axios";

const ApiAxios = axios.create({
  baseURL: "http://localhost:3250",
  headers: { "Content-Type": "application/json" },
});

export default ApiAxios;
