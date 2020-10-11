import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/components/AppHome')
  },
  {
    path: '/medium',
    name: 'Medium',
    component: () => import(/* webpackChunkName: "medium" */ '@/components/AppMedium')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
