import axios from "axios";

const instance = axios.create({
  baseURL: "https://api1node-production.up.railway.app/api/",
});

export default instance;
