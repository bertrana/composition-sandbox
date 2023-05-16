import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routesArr: Array<RouteRecordRaw> = [
  {
    path: '/stock',
    name: 'StockPage',
    component: () => import("../views/stock/index.vue")
  },
  {
    path: '/deals',
    name: 'DealsPage',
    component: () => import("../views/deals/index.vue")
  },
  {
    path: '/favorites',
    name: 'FavoritesPage',
    component: () => import("../views/favorites/index.vue")
  },
];

const routes = [
  {
    path: '/',
    name: 'MainPage',
    children: routesArr,
    component: () => import("../views/MainPage.vue"),
    redirect: '/stock',
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
