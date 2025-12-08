import axios from 'axios';

const MOCKAPI_URL = 'https://6935db68fa8e704dafbf13da.mockapi.io';

console.log('🚀 [API] Configurando MockAPI');
console.log('   URL:', MOCKAPI_URL);

const mockApi = axios.create({
  baseURL: MOCKAPI_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Interceptor para ver TODAS las peticiones
mockApi.interceptors.request.use(
  config => {
    console.log(`📤 [API Request] ${config.method?.toUpperCase()} ${config.url}`);
    if (config.data) {
      console.log('   Data:', config.data);
    }
    return config;
  },
  error => {
    console.error('❌ [API Request Error]', error.message);
    return Promise.reject(error);
  }
);

// Interceptor para ver TODAS las respuestas
mockApi.interceptors.response.use(
  response => {
    console.log(`📥 [API Response ${response.status}] ${response.config.url}`);
    return response;
  },
  error => {
    console.error(`💥 [API Response Error] ${error.response?.status || 'Sin conexión'}`, {
      URL: error.config?.url,
      Mensaje: error.message,
      Datos: error.response?.data
    });
    return Promise.reject(error);
  }
);

export default mockApi;