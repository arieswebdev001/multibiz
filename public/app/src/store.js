import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
Vue.config.devtools = true;
export default new Vuex.Store({
  state:{
    user:null,
    token:null
  },
  actions:{
    
  },
  mutations:{
    setUser(state, user, token){
      state.user = user;
      state.token = token;
    }
  },
  getters:{

  }
})