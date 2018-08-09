<template>
    <div class="page-sidebar-wrapper">
        <!-- BEGIN SIDEBAR -->
        <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
        <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
        <div class="page-sidebar navbar-collapse collapse">
            <!-- BEGIN SIDEBAR MENU -->
            <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
            <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
            <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
            <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
            <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
            <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
            <ul class="page-sidebar-menu   " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                <li class="nav-item start" :class="{ open : page === 'Dashboard' }">
                    <a href="/#/dashboard" class="nav-link">
                        <i class="icon-home"></i>
                        <span class="title">Dashboard</span>
                        <span class="selected" v-if="page === 'Dashboard'"></span>
                    </a>
                </li>
                <li class="nav-item" :class="{ open : page === 'Items' }">
                    <a href="/#/items" class="nav-link">
                        <i class="icon-star"></i>
                        <span class="title">Items</span>
                        <span class="selected" v-if="page === 'Items'"></span>
                    </a>
                </li>
                <li class="nav-item" :class="{ open : page === 'Warehouses' }">
                    <a href="/#/warehouses" class="nav-link">
                        <i class="fa fa-building"></i>
                        <span class="title">Warehouses</span>
                        <span class="selected" v-if="page === 'Warehouses'"></span>
                    </a>
                </li>
                <li class="nav-item" :class="{ open : page === 'Dealers' }">
                    <a href="/#/dealers" class="nav-link">
                        <i class="fa fa-users"></i>
                        <span class="title">Dealers</span>
                        <span class="selected" v-if="page === 'Dealers'"></span>
                    </a>
                </li>
                <li class="nav-item">
                    <a @click="logout" class="nav-link">
                        <i class="icon-power"></i>
                        <span class="title">Logout</span>
                    </a>
                </li>
            </ul>
            <!-- END SIDEBAR MENU -->
        </div>
        <!-- END SIDEBAR -->
    </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {
    }
  },
  methods:{
      logout(){
          this.$emit('logout');
      }
  },
  computed:{
      page(){
          return this.$route.name;
      }
  }
}
</script>