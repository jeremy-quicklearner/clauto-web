<template>
  <div>
    <TheNavbar v-if="isLoggedIn" />
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar/TheNavbar'
import {mapGetters} from 'vuex'

var onRouteOrSessionChange = function () {
  if (this.isLoggedIn && this.$route.path === '/login') {
    this.$router.push('/')
  }
  if (!this.isLoggedIn && this.$route.path !== '/login') {
    this.$router.push('/login')
  }
}
export default {
  name: 'App',
  components: {TheNavbar},
  computed: {
    ...mapGetters({
      isLoggedIn: 'session/isLoggedIn'
    })
  },
  watch: {
    $route: onRouteOrSessionChange,
    isLoggedIn: onRouteOrSessionChange
  },
  created: onRouteOrSessionChange
}
</script>

<style lang="css">
@import 'App.css';
</style>
