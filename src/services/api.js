import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://studybuddy-osk1.onrender.com/api',
});

// Attach JWT token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
