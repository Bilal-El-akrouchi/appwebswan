import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // maison du serveur
  withCredentials: true,            // toujours prendre les biscuits
  headers: { "Accept": "application/json" } // parle JSON
});

export default api;