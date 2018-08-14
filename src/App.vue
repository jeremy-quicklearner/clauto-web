<template>
  <div
    id="app"
    class="app"
  >
    <TheNavbar v-if="isLoggedIn" />
    <ThePageWiper ref="ThePageWiper"/>
    <router-view/>
  </div>
</template>

<script>
import util from '@/util'
import TheNavbar from '@/components/TheNavbar/TheNavbar'
import ThePageWiper from '@/components/ThePageWiper/ThePageWiper'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {TheNavbar, ThePageWiper},
  computed: {
    ...mapGetters({
      isLoggedIn: 'session/isLoggedIn'
    })
  },
  watch: {
    $route () { this.onRouteOrSessionChange() },
    isLoggedIn () { this.onRouteOrSessionChange() }
  },
  mounted () {
    this.$router.beforeEach((to, from, next) => {
      document.title = util.nameToTitle(to.name)
      if (from) {
        this.$refs.ThePageWiper.start(next)
      }
    })

    this.$router.afterEach((to, from) => {
      this.$refs.ThePageWiper.end()
    })

    this.onRouteOrSessionChange()
  },
  methods: {
    onRouteOrSessionChange () {
      if (this.isLoggedIn && this.$route.path === '/login') {
        this.$router.push('/')
      }
      if (!this.isLoggedIn && this.$route.path !== '/login') {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="css">
@import 'App.css';
</style>
