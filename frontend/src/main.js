import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index';
import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
import './assets/scss/main.scss';
window.toastr = require('toastr')
Vue.use(VueToastr2)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
