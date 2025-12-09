<template>
  <div class="product-view container-fluid py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fw-bold text-purple">
        <i class="bi bi-basket-fill me-2"></i>
        Gestión de Productos
      </h2>
      <button class="btn btn-success" @click="showCreateModal">
        <i class="bi bi-plus-lg me-2"></i>Nuevo Producto
      </button>
    </div>

    <div class="card shadow">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover table-striped">
            <thead class="table-dark">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.nombre }}</td>
                <td>${{ product.precio.toLocaleString() }}</td>
                <td>{{ product.categoria }}</td>
                <td>
                  <button class="btn btn-warning btn-sm me-2" @click="showEditModal(product)">
                    <i class="bi bi-pencil-fill"></i>
                  </button>
                  <button class="btn btn-danger btn-sm" @click="showDeleteModal(product)">
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="modal fade" id="createProductModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-success text-white">
            <h5 class="modal-title">
              <i class="bi bi-plus-circle-fill me-2"></i>Crear Nuevo Producto
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createProduct">
              <div class="mb-3">
                <label class="form-label">Nombre *</label>
                <input type="text" class="form-control" v-model="newProduct.nombre" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Precio *</label>
                <input type="number" class="form-control" v-model="newProduct.precio" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Descripción</label>
                <textarea class="form-control" v-model="newProduct.descripcion" rows="3"></textarea>
              </div>
              <div class="mb-3">
                <label class="form-label">Categoría</label>
                <input type="text" class="form-control" v-model="newProduct.categoria">
              </div>
              <div class="mb-3">
                <label class="form-label">URL de Imagen</label>
                <input type="text" class="form-control" v-model="newProduct.imagen">
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-success">
                  <i class="bi bi-check-circle me-2"></i>Guardar Producto
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="editProductModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-warning text-white">
            <h5 class="modal-title">
              <i class="bi bi-pencil-fill me-2"></i>Editar Producto
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateProduct">
              <div class="mb-3">
                <label class="form-label">Nombre *</label>
                <input type="text" class="form-control" v-model="editingProduct.nombre" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Precio *</label>
                <input type="number" class="form-control" v-model="editingProduct.precio" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Descripción</label>
                <textarea class="form-control" v-model="editingProduct.descripcion" rows="3"></textarea>
              </div>
              <div class="mb-3">
                <label class="form-label">Categoría</label>
                <input type="text" class="form-control" v-model="editingProduct.categoria">
              </div>
              <div class="mb-3">
                <label class="form-label">URL de Imagen</label>
                <input type="text" class="form-control" v-model="editingProduct.imagen">
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-warning">
                  <i class="bi bi-check-circle me-2"></i>Actualizar Producto
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="deleteProductModal" tabindex="-1" aria-hidden="true">
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
              ¿Estás seguro de eliminar el producto <strong>{{ deletingProduct.nombre }}</strong>?
            </p>
            <p class="text-muted text-center small">Esta acción no se puede deshacer.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              <i class="bi bi-x-circle me-2"></i>Cancelar
            </button>
            <button type="button" class="btn btn-danger" @click="confirmDeleteProduct">
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
import productService from '@/services/productService.js';
import { Modal } from 'bootstrap';

export default {
  name: 'ProductView',
  data() {
    return {
      products: [],
      newProduct: {
        nombre: '',
        precio: 0,
        descripcion: '',
        categoria: '',
        imagen: ''
      },
      editingProduct: {},
      deletingProduct: {},
      alert: {
        show: false,
        type: 'success',
        message: '',
        icon: 'bi-check-circle-fill'
      }
    };
  },
  async mounted() {
    await this.loadProducts();
  },
  methods: {
    async loadProducts() {
      try {
        this.products = await productService.getProducts();
      } catch (error) {
        this.showAlert('Error al cargar productos desde MockAPI', 'danger', 'bi-exclamation-triangle-fill');
        console.error('Error loading products:', error);
      }
    },

    showCreateModal() {
      this.newProduct = { nombre: '', precio: 0, descripcion: '', categoria: '', imagen: '' };
      const modal = new Modal(document.getElementById('createProductModal'));
      modal.show();
    },

    async createProduct() {
      try {
        await productService.createProduct(this.newProduct);
        await this.loadProducts();
        this.showAlert('Producto creado exitosamente', 'success', 'bi-check-circle-fill');
        const modal = Modal.getInstance(document.getElementById('createProductModal'));
        modal.hide();
      } catch (error) {
        this.showAlert('Error al crear producto', 'danger', 'bi-exclamation-triangle-fill');
        console.error('Error creating product:', error);
      }
    },

    showEditModal(product) {
      this.editingProduct = { ...product };
      const modal = new Modal(document.getElementById('editProductModal'));
      modal.show();
    },

    async updateProduct() {
      try {
        await productService.updateProduct(this.editingProduct.id, this.editingProduct);
        await this.loadProducts();
        this.showAlert('Producto actualizado exitosamente', 'success', 'bi-check-circle-fill');
        const modal = Modal.getInstance(document.getElementById('editProductModal'));
        modal.hide();
      } catch (error) {
        this.showAlert('Error al actualizar producto', 'danger', 'bi-exclamation-triangle-fill');
        console.error('Error updating product:', error);
      }
    },

    showDeleteModal(product) {
      this.deletingProduct = product;
      const modal = new Modal(document.getElementById('deleteProductModal'));
      modal.show();
    },

    async confirmDeleteProduct() {
      try {
        await productService.deleteProduct(this.deletingProduct.id);
        await this.loadProducts();
        this.showAlert('Producto eliminado exitosamente', 'success', 'bi-check-circle-fill');
        const modal = Modal.getInstance(document.getElementById('deleteProductModal'));
        modal.hide();
      } catch (error) {
        this.showAlert('Error al eliminar producto', 'danger', 'bi-exclamation-triangle-fill');
        console.error('Error deleting product:', error);
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