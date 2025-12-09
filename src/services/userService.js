import mockApi from './api.js';

const userService = {
  async getUsers() {
    console.log('🔍 [UserService] Obteniendo usuarios de MockAPI...');
    const response = await mockApi.get('/usuarios');
    console.log('✅ [UserService] Usuarios obtenidos:', response.data.length);
    return response.data;
  },

  async getUserById(id) {
    const response = await mockApi.get(/usuarios/${id});
    return response.data;
  },

  async createUser(userData) {
    console.log('➕ [UserService] Creando usuario:', userData);
    const response = await mockApi.post('/usuarios', userData);
    console.log('✅ [UserService] Usuario creado:', response.data);
    return response.data;
  },

  async updateUser(id, userData) {
    console.log('✏ [UserService] Actualizando usuario ID:', id);
    const response = await mockApi.put(/usuarios/${id}, userData);
    console.log('✅ [UserService] Usuario actualizado');
    return response.data;
  },

  async deleteUser(id) {
    console.log('🗑 [UserService] Eliminando usuario ID:', id);
    const response = await mockApi.delete(/usuarios/${id});
    console.log('✅ [UserService] Usuario eliminado');
    return response.data;
  },

  async login(usuario, contrasena) {
    console.log('🔐 [UserService] Login intento:', { usuario, contrasena });
    
    try {
      const users = await this.getUsers();
      console.log('📋 [UserService] Total usuarios:', users.length);
      
      const user = users.find(u => {
        const match = u.usuario === usuario && u.contrasena === contrasena;
        console.log(`   Comparando: "${u.usuario}" === "${usuario}" && "${u.contrasena}" === "${contrasena}" => ${match}`);
        return match;
      });
      
      if (user) {
        console.log('🎉 [UserService] Login EXITOSO para:', user.usuario);
        return user;
      } else {
        console.log('❌ [UserService] Login FALLIDO - No encontrado');
        return null;
      }
    } catch (error) {
      console.error('💥 [UserService] ERROR en login:', error);
      throw new Error('No se pudo conectar a MockAPI');
    }
  }
};

export default userService;
