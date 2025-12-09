<template>
  <div class="col-md-3 col-lg-2 bg-light sidebar">
    <div class="position-sticky pt-3">
      <h5 class="text-center text-purple mb-4">
         Repostería ARI-ANA
      </h5>
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link 
            to="/dashboard" 
            class="nav-link" 
            :class="{ 'active': $route.path === '/dashboard' }"
          >
            <i class="bi bi-house-door-fill me-2"></i>Inicio
          </router-link>
        </li>
        <li class="nav-item">
          <router-link 
            to="/dashboard/productos" 
            class="nav-link" 
            :class="{ 'active': $route.path.includes('/productos') }"
          >
            <i class="bi bi-basket-fill me-2"></i>Gestión Productos
          </router-link>
        </li>
        <li class="nav-item">
          <router-link 
            to="/dashboard/catalogo" 
            class="nav-link" 
            :class="{ 'active': $route.path.includes('/catalogo') }"
          >
            <i class="bi bi-grid-3x3-gap-fill me-2"></i>Ver Catálogo
          </router-link>
        </li>
        <li class="nav-item">
          <router-link 
            to="/dashboard/usuarios" 
            class="nav-link" 
            :class="{ 'active': $route.path.includes('/usuarios') }"
          >
            <i class="bi bi-people-fill me-2"></i>Gestión Usuarios
          </router-link>
        </li>
        <li class="nav-item mt-4">
          <a class="nav-link text-danger" href="#" @click="logout">
            <i class="bi bi-box-arrow-right me-2"></i>Cerrar Sesión
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent',
  methods: {
    logout() {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.sidebar {
  min-height: 100vh;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
}

.nav-link {
  color: #333;
  padding: 10px 15px;
  margin: 5px 0;
  border-radius: 5px;
  transition: all 0.3s;
}

.nav-link:hover {
  background-color: #fce4ec;
  color: #680a47;
}

.nav-link.active {
  background-color: #680a47;
  color: white;
}

.text-purple {
  color: #680a47;
}
</style>