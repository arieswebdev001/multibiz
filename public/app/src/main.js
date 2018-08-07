import Vue from 'vue'
import App from './App.vue'
import Router from './router';
import store from './store';
import {mixins} from './mixins';

Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.config.devtools = true;

Vue.mixin(mixins);
new Vue({
  el: '#app',
  render: h => h(App),
  router:Router,
  store
})
