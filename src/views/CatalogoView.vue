<template>
  <div class="catalogo-view container-fluid py-4">
    <!-- Encabezado -->
    <div class="text-center mb-5">
      <h2 class="fw-bold text-purple">
        <i class="bi bi-grid-3x3-gap-fill me-2"></i>Catálogo de Productos
      </h2>
      <p class="text-muted lead">Descubre nuestros deliciosos pasteles y postres</p>
    </div>

    <!-- Cards de productos -->
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-md-6 col-lg-4 mb-4">
        <div class="card product-card h-100 shadow-sm border-0">
          <!-- Imagen del producto -->
          <div class="product-image-container position-relative">
            <img 
              :src="product.imagen || 'https://via.placeholder.com/400x300'" 
              :alt="product.nombre"
              class="card-img-top"
              style="height: 250px; object-fit: cover;"
              @error="handleImageError"
            >
            <span class="badge bg-purple position-absolute top-0 end-0 m-3">
              ${{ product.precio.toLocaleString() }}
            </span>
          </div>
          
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-purple fw-bold">{{ product.nombre }}</h5>
            <p class="card-text text-muted">
              <i class="bi bi-tag-fill me-1"></i>{{ product.categoria || 'Pastelería' }}
            </p>
            
            <!-- Descripción -->
            <p class="card-text flex-grow-1" style="font-size: 0.95rem; color: #555;">
              {{ product.descripcion || 'Delicioso producto artesanal.' }}
            </p>
            
            <!-- Información adicional -->
            <div class="mt-3 pt-3 border-top">
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">
                  <i class="bi bi-info-circle me-1"></i>ID: {{ product.id }}
                </small>
                <router-link to="/dashboard/productos" class="btn btn-sm btn-outline-purple">
                  <i class="bi bi-pencil-square me-1"></i>Gestionar
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mensaje si no hay productos -->
    <div v-if="products.length === 0" class="text-center py-5">
      <div class="alert alert-info">
        <i class="bi bi-info-circle-fill me-2"></i>
        No hay productos en el catálogo. 
        <router-link to="/dashboard/productos" class="alert-link">Agrega algunos productos</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import productService from '@/services/productService.js';

export default {
  name: 'CatalogoView',
  data() {
    return {
      products: []
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
        console.error('Error cargando productos para catálogo:', error);
      }
    },
    
    handleImageError(event) {
      event.target.src = 'https://via.placeholder.com/400x300?text=Imagen+no+disponible';
    }
  }
};
</script>

<style scoped>
.catalogo-view {
  background-color: #f8f9fa;
  min-height: 100vh;
}

.product-card {
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
}

.product-image-container {
  overflow: hidden;
}

.product-card:hover .product-image-container img {
  transform: scale(1.05);
  transition: transform 0.5s ease;
}

.bg-purple {
  background-color: #680a47 !important;
  color: white;
  font-size: 1rem;
  padding: 8px 12px;
}

.text-purple {
  color: #680a47;
}

.btn-outline-purple {
  border-color: #680a47;
  color: #680a47;
}

.btn-outline-purple:hover {
  background-color: #680a47;
  color: white;
}

.card-title {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}
</style>