<template>
  <div class="user-view container-fluid py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fw-bold text-purple">
        <i class="bi bi-people-fill me-2"></i>
        Gestión de Usuarios
      </h2>
      <button class="btn btn-success" @click="showCreateModal">
        <i class="bi bi-plus-lg me-2"></i>Nuevo Usuario
      </button>
    </div>

    <div class="card shadow">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover table-striped">
            <thead class="table-dark">
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.usuario }}</td>
                <td>{{ user.gmail }}</td>
                <td>
                  <button class="btn btn-warning btn-sm me-2" @click="showEditModal(user)">
                    <i class="bi bi-pencil-fill"></i>
                  </button>
                  <button class="btn btn-danger btn-sm" @click="showDeleteModal(user)">
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="modal fade" id="createUserModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-success text-white">
            <h5 class="modal-title">
              <i class="bi bi-person-plus-fill me-2"></i>Crear Nuevo Usuario
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createUser">
              <div class="mb-3">
                <label class="form-label">Usuario *</label>
                <input type="text" class="form-control" v-model="newUser.usuario" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Email *</label>
                <input type="email" class="form-control" v-model="newUser.gmail" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Contraseña *</label>
                <input type="password" class="form-control" v-model="newUser.contrasena" required>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-success">
                  <i class="bi bi-check-circle me-2"></i>Guardar Usuario
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="editUserModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-warning text-white">
            <h5 class="modal-title">
              <i class="bi bi-pencil-fill me-2"></i>Editar Usuario
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateUser">
              <div class="mb-3">
                <label class="form-label">Usuario *</label>
                <input type="text" class="form-control" v-model="editingUser.usuario" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Email *</label>
                <input type="email" class="form-control" v-model="editingUser.gmail" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Contraseña *</label>
                <input type="password" class="form-control" v-model="editingUser.contrasena" required>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-warning">
                  <i class="bi bi-check-circle me-2"></i>Actualizar Usuario
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="deleteUserModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title">
              <i class="bi bi-exclamation-triangle-fill me-2"></i>Confirmar Eliminación
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p class="text-center">
              ¿Estás seguro de eliminar al usuario <strong>{{ deletingUser.usuario }}</strong>?
            </p>
            <p class="text-muted text-center small">Esta acción no se puede deshacer.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              <i class="bi bi-x-circle me-2"></i>Cancelar
            </button>
            <button type="button" class="btn btn-danger" @click="confirmDelete">
              <i class="bi bi-trash-fill me-2"></i>Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="alert.show" 
         :class="['alert', 'alert-dismissible', 'fade', 'show', 'alert-' + alert.type, 'mt-3']" 
         role="alert">
      <i :class="alert.icon + ' me-2'"></i>
      {{ alert.message }}
      <button type="button" class="btn-close" @click="alert.show = false"></button>
    </div>
  </div>
</template>

<script>
import userService from '@/services/userService.js';
import { Modal } from 'bootstrap';

export default {
  name: 'UserView',
  data() {
    return {
      users: [],
      newUser: {
        usuario: '',
        gmail: '',
        contrasena: ''
      },
      editingUser: {},
      deletingUser: {},
      alert: {
        show: false,
        type: 'success',
        message: '',
        icon: 'bi-check-circle-fill'
      }
    };
  },
  async mounted() {
    await this.loadUsers();
  },
  methods: {
    async loadUsers() {
      try {
        this.users = await userService.getUsers();
      } catch (error) {
        this.showAlert('Error al cargar usuarios desde MockAPI', 'danger', 'bi-exclamation-triangle-fill');
        console.error('Error loading users:', error);
      }
    },

    showCreateModal() {
      this.newUser = { usuario: '', gmail: '', contrasena: '' };
      const modal = new Modal(document.getElementById('createUserModal'));
      modal.show();
    },

    async createUser() {
      try {
        await userService.createUser(this.newUser);
        await this.loadUsers();
        this.showAlert('Usuario creado exitosamente', 'success', 'bi-check-circle-fill');
        const modal = Modal.getInstance(document.getElementById('createUserModal'));
        modal.hide();
      } catch (error) {
        this.showAlert('Error al crear usuario', 'danger', 'bi-exclamation-triangle-fill');
        console.error('Error creating user:', error);
      }
    },

    showEditModal(user) {
      this.editingUser = { ...user };
      const modal = new Modal(document.getElementById('editUserModal'));
      modal.show();
    },

    async updateUser() {
      try {
        await userService.updateUser(this.editingUser.id, this.editingUser);
        await this.loadUsers();
        this.showAlert('Usuario actualizado exitosamente', 'success', 'bi-check-circle-fill');
        const modal = Modal.getInstance(document.getElementById('editUserModal'));
        modal.hide();
      } catch (error) {
        this.showAlert('Error al actualizar usuario', 'danger', 'bi-exclamation-triangle-fill');
        console.error('Error updating user:', error);
      }
    },

    showDeleteModal(user) {
      this.deletingUser = user;
      const modal = new Modal(document.getElementById('deleteUserModal'));
      modal.show();
    },

    async confirmDelete() {
      try {
        await userService.deleteUser(this.deletingUser.id);
        await this.loadUsers();
        this.showAlert('Usuario eliminado exitosamente', 'success', 'bi-check-circle-fill');
        const modal = Modal.getInstance(document.getElementById('deleteUserModal'));
        modal.hide();
      } catch (error) {
        this.showAlert('Error al eliminar usuario', 'danger', 'bi-exclamation-triangle-fill');
        console.error('Error deleting user:', error);
      }
    },

    showAlert(message, type, icon) {
      this.alert = { show: true, message, type, icon };
      setTimeout(() => {
        this.alert.show = false;
      }, 4000);
    }
  }
};
</script>

<style scoped>
.text-purple {
  color: #680a47;
}
</style>