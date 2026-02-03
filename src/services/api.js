// import axios from "axios";

// const API = axios.create({
//   baseURL: process.env.REACT_APP_API_URL || 'https://studybuddy-backend-xi.vercel.app/api',
// });

// // Add response interceptor for debugging
// API.interceptors.response.use(
//   (response) => {
//     console.log('API Response:', response.config.url, response.status, response.data);
//     return response;
//   },
//   (error) => {
//     console.error('API Error:', error.config?.url, error.response?.status, error.response?.data);
//     return Promise.reject(error);
//   }
// );

// // Attach JWT token automatically
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

// export default API;


import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://studybuddy-backend-xi.vercel.app/api',
});

// Add response interceptor for debugging
API.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.config.url, response.status, response.data);
    return response;
  },
  (error) => {
    console.error('API Error:', error.config?.url, error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

// Attach JWT token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;