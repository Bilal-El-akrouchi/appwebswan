// src/lib/api.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000",
  withCredentials: true,                 // ← indispensable pour les cookies Sanctum
  headers: { Accept: "application/json" }
});

// (optionnel) gérer globalement les 401
api.interceptors.response.use(
  r => r,
  e => {
    if (e.response?.status === 401) {
      // ex. : window.location.href = "/login";
    }
    return Promise.reject(e);
  }
);

export default api;
