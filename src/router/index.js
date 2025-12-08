import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import DashboardView from '@/views/DashboardView.vue';
import DashboardHome from '@/views/DashboardHome.vue';
import ProductView from '@/views/ProductView.vue';
import UserView from '@/views/UserView.vue';
import CatalogoView from '@/views/CatalogoView.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard',
    component: DashboardView,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: DashboardHome
      },
      {
        path: 'productos',
        name: 'productos',
        component: ProductView
      },
      {
        path: 'usuarios',
        name: 'usuarios',
        component: UserView
      }, // ⬅️ AQUÍ FALTABA ESTA COMA
      {
        path: 'catalogo',
        name: 'catalogo',
        component: CatalogoView
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guard (EXIGENCIA PDF 5.2)
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authToken');
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else if (to.path === '/login' && isAuthenticated) {
    next('/dashboard');
  } else {
    next();
  }
});

export default router;