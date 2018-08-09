<template>
  <div>
    <div v-if="user === null">
      <router-view></router-view>
    </div>
    <div v-else>
        <header-view @logout="logout"></header-view>
        <!-- BEGIN HEADER & CONTENT DIVIDER -->
        <div class="clearfix"> </div>
        <!-- END HEADER & CONTENT DIVIDER -->
        <!-- BEGIN CONTAINER -->
        <div class="page-container">
            <sidebar @logout="logout"></sidebar>
            <!-- BEGIN CONTENT -->
            <div class="page-content-wrapper">
                <!-- BEGIN CONTENT BODY -->
                <div class="page-content">
                    <!-- BEGIN PAGE BASE CONTENT -->
                    <router-view></router-view>
                    <!-- END PAGE BASE CONTENT -->
                </div>
                <!-- END CONTENT BODY -->
            </div>
            <!-- END CONTENT -->
        </div>
        <!-- END CONTAINER -->
      <footer></footer>
    </div>
  </div>
</template>

<script>
import FooterView from './components/layout/FooterView.vue';
import Sidebar from './components/layout/Sidebar.vue';
import HeaderView from './components/layout/HeaderView.vue';
export default {
  name: 'app',
  components:{ FooterView, Sidebar, HeaderView },
  data () {
    return {
    }
  },
  methods:{
    logout(){
      let u = this;
      this.sweetAlert("Are you sure you want to logout from the system?", function(){
        u.$store.commit('setUser', null, null);
        window.localStorage.removeItem("token");
        u.redirectToLogin(); 
      });
    }
  },
  mounted(){
    this.$http.defaults.headers.post['Content-Type'] = 'application/json';
    this.$http.defaults.headers.get['Accept'] = 'application/json';
    let u = this;
		//check if logged in
		if(window.localStorage.token !== undefined){
      this.$http.defaults.headers.get['Authorization'] = 'Bearer ' + window.localStorage.token;
      
      this.$http.get('../../api/user')
      .then(function (response) {
        u.$store.commit('setUser', response.data, window.localStorage.token);
        u.redirectToHome();
      })
      .catch(function (error) {
         u.$store.commit('setUser', null, null);
         u.redirectToLogin();
      });
    }
    else{
       u.$store.commit('setUser', null, null);
       u.redirectToLogin();
    }
  },
  computed:{
    user(){
      return this.$store.state.user;
    }
  },
  watch:{
    $route (to, from){
        if(to.path !== '/login' && window.localStorage.token === undefined)
          this.redirectToLogin();

        window.document.title = "App - " + this.$route.name;
    }
  } 
}
</script>