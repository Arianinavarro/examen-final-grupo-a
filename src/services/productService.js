import mockApi from './api.js';

const productService = {
  async getProducts() {
    console.log('🔍 [ProductService] Obteniendo productos de MockAPI...');
    const response = await mockApi.get('/productos');
    console.log('✅ [ProductService] Productos obtenidos:', response.data.length);
    return response.data;
  },

  async getProductById(id) {
    console.log('🔍 [ProductService] Obteniendo producto ID:', id);
    const response = await mockApi.get(`/productos/${id}`);
    return response.data;
  },

  async createProduct(productData) {
    console.log('➕ [ProductService] Creando producto:', productData.nombre);
    const response = await mockApi.post('/productos', productData);
    console.log('✅ [ProductService] Producto creado:', response.data);
    return response.data;
  },

  async updateProduct(id, productData) {
    console.log('✏️ [ProductService] Actualizando producto ID:', id);
    const response = await mockApi.put(`/productos/${id}`, productData);
    console.log('✅ [ProductService] Producto actualizado');
    return response.data;
  },

  async deleteProduct(id) {
    console.log('🗑️ [ProductService] Eliminando producto ID:', id);
    const response = await mockApi.delete(`/productos/${id}`);
    console.log('✅ [ProductService] Producto eliminado');
    return response.data;
  }
};

export default productService;