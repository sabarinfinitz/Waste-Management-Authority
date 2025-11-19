import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

// Local backend (development)
// Change PORT if your local server uses a different port
const LOCAL_BACKEND = "http://localhost:4000/api";

// Always use local backend for development / testing (no Render dependency)
const baseURL = LOCAL_BACKEND;

const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  } catch (e) {
    // ignore
  }
  return config;
});

export default api;