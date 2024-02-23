import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'FrontView',
    component: () => import('../views/FrontView.vue'),
    // 巢狀路由
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'products',
        name: '產品列表',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/CartView.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/admin',
    name: 'DashboardView',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/dashboard/ProductsView.vue'),
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/dashboard/OrderView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
