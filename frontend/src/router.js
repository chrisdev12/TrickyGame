import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
  {
    path: '',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
  },
  {
    path: '/game/:id',
    name: 'Game',
    component: () => import(/* webpackChunkName: "medium" */ '@/views/Game'),
    props: (route) => ({ id: route.params.id }),
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
