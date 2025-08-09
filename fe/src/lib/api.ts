import axios from "axios";

export const BASE_URL="http://localhost:5000";

const api=axios.create({
    baseURL:BASE_URL,
    headers:{
        "Content-Type":"application/json",
    },
    
    // withCredentials: true  
});

// =================== REQUEST INTERCEPTOR ===================
// Attach JWT token if present
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// =================== AUTH ENDPOINTS ===================

const AUTH_BASE = "/auth";
const REGISTER_ENDPOINT = `${AUTH_BASE}/register`;
const SIGNIN_ENDPOINT = `${AUTH_BASE}/signin`;

// =================== USER ENDPOINTS ===================

const USER_BASE = "/user";
const CONTENT_ENDPOINT = `${USER_BASE}/content`;

// Export instance + endpoints
export { api, REGISTER_ENDPOINT, SIGNIN_ENDPOINT, CONTENT_ENDPOINT };