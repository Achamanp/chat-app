import axios from "axios";
export const baseURL = "https://chat-app-backend-production-2768.up.railway.app";
export const httpClient = axios.create({
  baseURL: baseURL,
});
