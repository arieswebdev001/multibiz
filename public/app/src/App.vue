<template>
  <div>
    <div v-if="user === null">
      <router-view></router-view>
    </div>
    <div v-else>
      Admin Dashboard here
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  },
  mounted(){
      console.log(this.$store.state.user);
  },
  computed:{
    user(){
      return this.$store.state.user;
    }
  }
}
</script>