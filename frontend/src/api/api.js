// ...existing code...
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

// Default (production) backend on Render (already in your file)
const RENDER_BACKEND = "https://waste-managment-authority-mobileapp.onrender.com/api";

// Toggle to force local backend during development (uncomment and set if needed)
const USE_LOCAL_BACKEND = false; // set true to use local backend
const LOCAL_BACKEND = "http://localhost:4000/api"; // or `http://<YOUR_LAN_IP>:4000/api`

const baseURL = (() => {
  if (USE_LOCAL_BACKEND) return LOCAL_BACKEND;
  // For web use the current web origin (default port included in window.location.origin)
  if (Platform.OS === "web" && typeof window !== "undefined") {
    return `${window.location.origin}/api`;
  }
  // For native / other environments, use the Render deployment
  return RENDER_BACKEND;
})();

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
// ...existing code...