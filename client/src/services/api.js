import axios from 'axios';

// Base Axios instance configured for MERN cookie auth and CORS
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for API errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const customError = {
      message: error.response?.data?.message || error.message || 'An unexpected error occurred',
      status: error.response?.status,
      data: error.response?.data,
    };
    return Promise.reject(customError);
  }
);

// Services API
export const servicesAPI = {
  getAll: (params) => api.get('/services', { params }),
  getBySlug: (slug) => api.get(`/services/${slug}`),
  create: (data) => api.post('/services', data),
  update: (id, data) => api.put(`/services/${id}`, data),
  delete: (id) => api.delete(`/services/${id}`),
};

// Projects API
export const projectsAPI = {
  getAll: (params) => api.get('/projects', { params }),
  getBySlug: (slug) => api.get(`/projects/${slug}`),
  create: (data) => api.post('/projects', data),
  update: (id, data) => api.put(`/projects/${id}`, data),
  delete: (id) => api.delete(`/projects/${id}`),
};

// Ventures API
export const venturesAPI = {
  getAll: (params) => api.get('/ventures', { params }),
  create: (data) => api.post('/ventures', data),
  update: (id, data) => api.put(`/ventures/${id}`, data),
  delete: (id) => api.delete(`/ventures/${id}`),
};

// Inquiries API
export const inquiriesAPI = {
  submit: (data) => api.post('/inquiries', data),
  getAll: (params) => api.get('/inquiries', { params }),
  updateStatus: (id, status) => api.put(`/inquiries/${id}`, { status }),
  delete: (id) => api.delete(`/inquiries/${id}`),
};

// Analytics API
export const analyticsAPI = {
  record: (data) => api.post('/analytics', data),
  getSummary: (params) => api.get('/analytics', { params }),
};

// Settings API
export const settingsAPI = {
  get: () => api.get('/settings'),
  update: (data) => api.put('/settings', data),
};

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  getMe: () => api.get('/auth/me'),
};

export default api;
