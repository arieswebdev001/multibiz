import Vue from 'vue'
import App from './App.vue'
import Router from './router';
import store from './store';
import {mixins} from './mixins';

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;
Vue.config.devtools = true;

 
Vue.use(VueAxios, axios)
Vue.mixin(mixins);
new Vue({
  el: '#app',
  render: h => h(App),
  router:Router,
  store
})
