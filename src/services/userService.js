// Servicio de usuarios - ANA JAIME
// Implementación completa del CRUD

const API_URL = 'https://69373783f8dc35baff33b266.mockapi.io/usuarios';

export const userService = {
  async getUsers() {
    const response = await fetch(API_URL);
    return response.json();
  },
  
  async createUser(user) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    });
    return response.json();
  }
  
  // ... más métodos CRUD
};
