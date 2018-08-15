<template>
  <span
    id="TheNavbar"
    style="z-index: 100; position: fixed;"
  >
    <transition name="panel-navbar-top">
      <div
        v-if="isLoggedIn"
        id="TheNavbarTop"
        class="panel panel-navbar-top"
      >
        <ControlButton
          :on-click="onClickLogout"
          button-text="Logout"
          style="float: right; margin-right: 20px;"
        />
      </div>
    </transition>
    <transition name="panel-navbar-left">
      <div
        v-if="isLoggedIn"
        id="TheNavbarLeft"
        class="panel panel-navbar-left"
      >
        <TheNavbarButton
          button-text="Main Page"
          dest-path="/"
        />
        <TheNavbarButton
          button-text="Users"
          dest-path="/users"
        />
      </div>
    </transition>
  </span>
</template>

<script>
import {mapGetters} from 'vuex'
import ControlButton from '@/components/Control/ControlButton'
import TheNavbarButton from '@/components/The/TheNavbar/TheNavbarButton/TheNavbarButton'

export default {
  name: 'TheNavbar',
  components: {TheNavbarButton, ControlButton},
  data () {
    return {
      links: []
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'session/isLoggedIn'
    })
  },
  methods: {
    onClickLogout () {
      this.$store.dispatch('session/kill')
    }
  }
}
</script>

<style scoped>
.panel-navbar-top {
  z-index: 110;
  position: relative;
  width: 100vw;
  border-bottom-width: 5px;
  border-bottom-style: solid;
  border-bottom-color: var(--clauto-gray);
  overflow: auto;
}
.panel-navbar-top-enter-active, .panel-navbar-top-leave-active {
  transition: top 1s;
  top: 0;
}
.panel-navbar-top-enter, .panel-navbar-top-leave-to {
  top: -100px;
}

.panel-navbar-left {
  position: relative;
  height: 100vh;
  width: 100px;
  padding-right: 0;
  border-right-width: 5px;
  border-right-style: solid;
  border-right-color: var(--clauto-gray);
}
.panel-navbar-left-enter-active, .panel-navbar-left-leave-active {
  transition: left 1s;
  left: 0;
}
.panel-navbar-left-enter, .panel-navbar-left-leave-to {
  left: -100vh;
}
</style>
