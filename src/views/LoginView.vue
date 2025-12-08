<template>
  <div class="login-container d-flex align-items-center justify-content-center min-vh-100">
    <div class="card shadow-lg p-4" style="width: 100%; max-width: 400px;">
      <div class="text-center mb-4">
        <h2 class="fw-bold text-purple">
          <i class="bi bi-cake me-2"></i>Repostería ARI-ANA
        </h2>
        <p class="text-muted">Iniciar Sesión</p>
      </div>
      
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="usuario" class="form-label fw-semibold">
            <i class="bi bi-person-fill me-2"></i>Usuario
          </label>
          <input 
            type="text" 
            class="form-control form-control-lg" 
            id="usuario" 
            v-model="usuario" 
            placeholder="admin"
            required
          >
        </div>
        
        <div class="mb-3">
          <label for="contrasena" class="form-label fw-semibold">
            <i class="bi bi-key-fill me-2"></i>Contraseña
          </label>
          <input 
            type="password" 
            class="form-control form-control-lg" 
            id="contrasena" 
            v-model="contrasena" 
            placeholder="123"
            required
          >
        </div>
        
        <button type="submit" class="btn btn-purple btn-lg w-100 mt-3">
          <i class="bi bi-box-arrow-in-right me-2"></i>Ingresar
        </button>
      </form>
      
      <div class="alert alert-info mt-4">
        <small>
          <i class="bi bi-info-circle me-2"></i>
          <strong>Credenciales de prueba:</strong><br>
          Usuario: <code> ariani </code> | Contraseña: <code>123</code><br>
          Usuario: <code>ana</code> | Contraseña: <code>123</code>
        </small>
      </div>
      
      <div v-if="error" class="alert alert-danger alert-dismissible fade show mt-4" role="alert">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        <strong>Error:</strong> {{ error }}
        <button type="button" class="btn-close" @click="error = ''"></button>
      </div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService.js';

export default {
  name: 'LoginView',
  data() {
    return {
      usuario: 'admin',
      contrasena: '123',
      error: ''
    };
  },
  methods: {
    async handleLogin() {
      console.log('👤 [LoginView] Iniciando login...');
      console.log('   Usuario:', this.usuario);
      console.log('   Contraseña:', this.contrasena);
      
      try {
        this.error = '';
        
        if (!this.usuario || !this.contrasena) {
          this.error = 'Completa todos los campos';
          return;
        }
        
        console.log('🔄 [LoginView] Llamando a userService.login()');
        const user = await userService.login(this.usuario, this.contrasena);
        console.log('📋 [LoginView] Usuario devuelto:', user);
        
        if (user) {
          localStorage.setItem('authToken', 'token-' + user.id);
          localStorage.setItem('user', JSON.stringify(user));
          
          console.log('💾 [LoginView] Token guardado');
          console.log('   authToken:', localStorage.getItem('authToken'));
          console.log('   user:', localStorage.getItem('user'));
          
          // Alerta de éxito
          const alert = document.createElement('div');
          alert.className = 'alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3';
          alert.style.zIndex = '1050';
          alert.innerHTML = `
            <i class="bi bi-check-circle-fill me-2"></i>
            ¡Bienvenido ${user.usuario}!
          `;
          document.body.appendChild(alert);
          
          // Redirigir
          setTimeout(() => {
            alert.remove();
            this.$router.push('/dashboard');
          }, 1000);
        } else {
          this.error = 'Usuario o contraseña incorrectos';
          console.log('❌ [LoginView] Credenciales incorrectas');
        }
      } catch (err) {
        console.error('💥 [LoginView] Error:', err);
        this.error = 'Error de conexión: ' + err.message;
      }
    }
  },
  mounted() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped>
.login-container {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
}

.card {
  border: none;
  border-radius: 15px;
  background: white;
}

.btn-purple {
  background-color: #680a47;
  border-color: #680a47;
  color: white;
}

.btn-purple:hover {
  background-color: #55093a;
  border-color: #55093a;
}

.text-purple {
  color: #680a47;
}

.form-control:focus {
  border-color: #680a47;
  box-shadow: 0 0 0 0.25rem rgba(104, 10, 71, 0.25);
}
</style>