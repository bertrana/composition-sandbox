import { createRouter, createWebHistory } from 'vue-router';
import StockPage from '@/views/StockPage.vue';
import DealsPage from '../views/DealsPage.vue';
import FavoritesPage from '../views/FavoritesPage.vue';

const routes = [
  {
    path: '/',
    name: 'stock',
    component: StockPage,
  },
  {
    path: '/deals',
    name: 'deals',
    component: DealsPage,
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
