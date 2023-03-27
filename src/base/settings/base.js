import axios from "axios";

const instance = axios.create({
  // baseURL: "https://api1node-production.up.railway.app/api/",
  baseURL: "https://apimocha.com/v1.1/test/",
});

export default instance;
