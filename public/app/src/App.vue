<template>
  <div>
    <div v-if="user === null">
      <router-view></router-view>
    </div>
    <div v-else>
          <!-- Start Page Loading -->
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
      </div>
      <!-- End Page Loading -->
      <!-- //////////////////////////////////////////////////////////////////////////// -->
      <!-- START HEADER -->
      <header-view></header-view>
      <!-- END HEADER -->
      <!-- //////////////////////////////////////////////////////////////////////////// -->
      <!-- START MAIN -->
      <div id="main">
        <!-- START WRAPPER -->
        <div class="wrapper">
          <!-- START LEFT SIDEBAR NAV-->
          <sidebar></sidebar>
          <!-- END LEFT SIDEBAR NAV-->
          <!-- //////////////////////////////////////////////////////////////////////////// -->
          <!-- START CONTENT -->
          <section id="content">
            <!--start container-->
            <div class="container" style="min-height: 560px;">
              
            </div>
            <!--end container-->
          </section>
          <!-- END CONTENT -->
          <!-- //////////////////////////////////////////////////////////////////////////// -->
          <!-- START RIGHT SIDEBAR NAV-->
          <aside id="right-sidebar-nav">
            <ul id="chat-out" class="side-nav rightside-navigation">
              <li class="li-hover">
                <div class="row">
                  <div class="col s12 border-bottom-1 mt-5">
                    <ul class="tabs">
                      <li class="tab col s4">
                        <a href="#activity" class="active">
                          <span class="material-icons">graphic_eq</span>
                        </a>
                      </li>
                      <li class="tab col s4">
                        <a href="#chatapp">
                          <span class="material-icons">face</span>
                        </a>
                      </li>
                      <li class="tab col s4">
                        <a href="#settings">
                          <span class="material-icons">settings</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div id="settings" class="col s12">
                    <h6 class="mt-5 mb-3 ml-3">GENERAL SETTINGS</h6>
                    <ul class="collection border-none">
                      <li class="collection-item border-none">
                        <div class="m-0">
                          <span class="font-weight-600">Notifications</span>
                          <div class="switch right">
                            <label>
                              <input checked type="checkbox">
                              <span class="lever"></span>
                            </label>
                          </div>
                        </div>
                        <p>Use checkboxes when looking for yes or no answers.</p>
                      </li>
                      <li class="collection-item border-none">
                        <div class="m-0">
                          <span class="font-weight-600">Show recent activity</span>
                          <div class="switch right">
                            <label>
                              <input checked type="checkbox">
                              <span class="lever"></span>
                            </label>
                          </div>
                        </div>
                        <p>The for attribute is necessary to bind our custom checkbox with the input.</p>
                      </li>
                      <li class="collection-item border-none">
                        <div class="m-0">
                          <span class="font-weight-600">Notifications</span>
                          <div class="switch right">
                            <label>
                              <input type="checkbox">
                              <span class="lever"></span>
                            </label>
                          </div>
                        </div>
                        <p>Use checkboxes when looking for yes or no answers.</p>
                      </li>
                      <li class="collection-item border-none">
                        <div class="m-0">
                          <span class="font-weight-600">Show recent activity</span>
                          <div class="switch right">
                            <label>
                              <input type="checkbox">
                              <span class="lever"></span>
                            </label>
                          </div>
                        </div>
                        <p>The for attribute is necessary to bind our custom checkbox with the input.</p>
                      </li>
                      <li class="collection-item border-none">
                        <div class="m-0">
                          <span class="font-weight-600">Show your emails</span>
                          <div class="switch right">
                            <label>
                              <input type="checkbox">
                              <span class="lever"></span>
                            </label>
                          </div>
                        </div>
                        <p>Use checkboxes when looking for yes or no answers.</p>
                      </li>
                      <li class="collection-item border-none">
                        <div class="m-0">
                          <span class="font-weight-600">Show Task statistics</span>
                          <div class="switch right">
                            <label>
                              <input type="checkbox">
                              <span class="lever"></span>
                            </label>
                          </div>
                        </div>
                        <p>The for attribute is necessary to bind our custom checkbox with the input.</p>
                      </li>
                    </ul>
                  </div>
                  <div id="chatapp" class="col s12">
                    <div class="collection border-none">
                      <a href="#!" class="collection-item avatar border-none">
                        <img src="images/users/no photo.jpg" alt="" class="circle cyan">
                        <span class="line-height-0">Elizabeth Elliott </span>
                        <span class="medium-small right blue-grey-text text-lighten-3">5.00 AM</span>
                        <p class="medium-small blue-grey-text text-lighten-3">Thank you </p>
                      </a>
                      <a href="#!" class="collection-item avatar border-none">
                        <img src="images/users/no photo.jpg" alt="" class="circle teal accent-4">
                        <span class="line-height-0">Sarah Graves </span>
                        <span class="medium-small right blue-grey-text text-lighten-3">11.14 PM</span>
                        <p class="medium-small blue-grey-text text-lighten-3">Okay you </p>
                      </a>
                      <a href="#!" class="collection-item avatar border-none">
                        <img src="images/users/no photo.jpg" alt="" class="circle red accent-2">
                        <span class="line-height-0">Andrew Hoffman </span>
                        <span class="medium-small right blue-grey-text text-lighten-3">7.30 PM</span>
                        <p class="medium-small blue-grey-text text-lighten-3">Can do </p>
                      </a>
                      <a href="#!" class="collection-item avatar border-none">
                        <img src="images/users/no photo.jpg" alt="" class="circle cyan">
                        <span class="line-height-0">Camila Lynch </span>
                        <span class="medium-small right blue-grey-text text-lighten-3">2.00 PM</span>
                        <p class="medium-small blue-grey-text text-lighten-3">Leave it </p>
                      </a>
                    </div>
                  </div>
                  <div id="activity" class="col s12">
                    <h6 class="mt-5 mb-3 ml-3">RECENT ACTIVITY</h6>
                    <div class="activity">
                      <div class="col s3 mt-2 center-align recent-activity-list-icon">
                        <i class="material-icons white-text icon-bg-color deep-purple lighten-2">add_shopping_cart</i>
                      </div>
                      <div class="col s9 recent-activity-list-text">
                        <a href="#" class="deep-purple-text medium-small">just now</a>
                        <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Jim Doe Purchased new equipments for zonal office.</p>
                      </div>
                      <div class="recent-activity-list chat-out-list row mb-0">
                        <div class="col s3 mt-2 center-align recent-activity-list-icon">
                          <i class="material-icons white-text icon-bg-color cyan lighten-2">airplanemode_active</i>
                        </div>
                        <div class="col s9 recent-activity-list-text">
                          <a href="#" class="cyan-text medium-small">Yesterday</a>
                          <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Your Next flight for USA will be on 15th August 2015.</p>
                        </div>
                      </div>
                      <div class="recent-activity-list chat-out-list row mb-0">
                        <div class="col s3 mt-2 center-align recent-activity-list-icon medium-small">
                          <i class="material-icons white-text icon-bg-color green lighten-2">settings_voice</i>
                        </div>
                        <div class="col s9 recent-activity-list-text">
                          <a href="#" class="green-text medium-small">5 Days Ago</a>
                          <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Natalya Parker Send you a voice mail for next conference.</p>
                        </div>
                      </div>
                      <div class="recent-activity-list chat-out-list row mb-0">
                        <div class="col s3 mt-2 center-align recent-activity-list-icon">
                          <i class="material-icons white-text icon-bg-color amber lighten-2">store</i>
                        </div>
                        <div class="col s9 recent-activity-list-text">
                          <a href="#" class="amber-text medium-small">1 Week Ago</a>
                          <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Jessy Jay open a new store at S.G Road.</p>
                        </div>
                      </div>
                      <div class="recent-activity-list row">
                        <div class="col s3 mt-2 center-align recent-activity-list-icon">
                          <i class="material-icons white-text icon-bg-color deep-orange lighten-2">settings_voice</i>
                        </div>
                        <div class="col s9 recent-activity-list-text">
                          <a href="#" class="deep-orange-text medium-small">2 Week Ago</a>
                          <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">voice mail for conference.</p>
                        </div>
                      </div>
                      <div class="recent-activity-list chat-out-list row mb-0">
                        <div class="col s3 mt-2 center-align recent-activity-list-icon medium-small">
                          <i class="material-icons white-text icon-bg-color brown lighten-2">settings_voice</i>
                        </div>
                        <div class="col s9 recent-activity-list-text">
                          <a href="#" class="brown-text medium-small">1 Month Ago</a>
                          <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Natalya Parker Send you a voice mail for next conference.</p>
                        </div>
                      </div>
                      <div class="recent-activity-list chat-out-list row mb-0">
                        <div class="col s3 mt-2 center-align recent-activity-list-icon">
                          <i class="material-icons white-text icon-bg-color deep-purple lighten-2">store</i>
                        </div>
                        <div class="col s9 recent-activity-list-text">
                          <a href="#" class="deep-purple-text medium-small">3 Month Ago</a>
                          <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Jessy Jay open a new store at S.G Road.</p>
                        </div>
                      </div>
                      <div class="recent-activity-list row">
                        <div class="col s3 mt-2 center-align recent-activity-list-icon">
                          <i class="material-icons white-text icon-bg-color grey lighten-2">settings_voice</i>
                        </div>
                        <div class="col s9 recent-activity-list-text">
                          <a href="#" class="grey-text medium-small">1 Year Ago</a>
                          <p class="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">voice mail for conference.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </aside>
          <!-- END RIGHT SIDEBAR NAV-->
        </div>
        <!-- END MAIN -->
      </div>
      <footer-view></footer-view>
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
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', '../../js/app.js')
    document.head.appendChild(recaptchaScript)

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
<style>
  .page-content{
    padding-top:0px !important;
  }
</style>
