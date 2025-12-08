<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
    <div class="container-fluid">
      <span class="navbar-brand text-purple fw-bold">
        🎂 Repostería ARI-ANA
      </span>
      <div class="d-flex align-items-center">
        <span class="badge bg-purple me-2">
          <i class="bi bi-person-fill me-1"></i>
          {{ currentUser }}
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  computed: {
    currentUser() {
      const user = localStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        return userData.usuario || 'Usuario';
      }
      return 'Usuario';
    }
  }
}
</script>

<style scoped>
.text-purple {
  color: #680a47;
}

.bg-purple {
  background-color: #680a47 !important;
}
</style>