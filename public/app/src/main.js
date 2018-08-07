import Vue from 'vue'
import App from './App.vue'
import Router from './router.js';
import store from './store.js';

Vue.config.productionTip = true;
Vue.config.devtools = true;

new Vue({
  el: '#app',
  render: h => h(App),
  router:Router,
  store
})
