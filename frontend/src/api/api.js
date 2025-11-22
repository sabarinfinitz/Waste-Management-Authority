import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

// Local backend (development)
// Change PORT if your local server uses a different port
const LOCAL_BACKEND = "http://172.16.27.205:4000/api";

// For mobile device testing, use your computer's IP address instead of localhost
// const LOCAL_BACKEND = "http://192.168.1.100:4000/api"; // Replace with your IP

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