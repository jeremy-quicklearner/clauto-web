<template>
  <div
    id="app"
    class="app"
  >
    <TheNavbar/>
    <ThePageWiper ref="ThePageWiper"/>
    <router-view/>
  </div>
</template>

<script>
import util from '@/util'
import TheNavbar from '@/components/The/Navbar/TheNavbar'
import ThePageWiper from '@/components/The/ThePageWiper'
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
  created () {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
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
    this.onResize()
  },
  methods: {
    onRouteOrSessionChange () {
      if (this.isLoggedIn && this.$route.path === '/login') {
        this.$router.push('/')
      }
      if (!this.isLoggedIn && this.$route.path !== '/login') {
        this.$router.push('/login')
      }
    },
    onResize (event) {
      this.$store.dispatch(
        'viewport/update',
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    }
  }
}
</script>

<style lang="css">
@import 'App.css';
</style>
