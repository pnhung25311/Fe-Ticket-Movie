import axios from 'axios';

const api = axios.create({
  baseURL: 'http://26.208.7.179:2113', // 👈 thay bằng domain thật khi deploy
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000
});

// ✅ Nếu muốn tự động đính kèm token vào tất cả request:
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
