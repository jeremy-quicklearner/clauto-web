<template>
  <transition name="panel-navbar-left">
    <div
      v-if="showLeftNav"
      id="TheNavbarLeft"
      class="panel panel-navbar-left"
    >
      <ControlNavLeftButton
        button-text="Main Page"
        dest-path="/"
      />
      <ControlNavLeftButton
        button-text="Users"
        dest-path="/users"
      />
    </div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import ControlNavLeftButton from '@/components/Control/Nav/ControlNavLeftButton'

export default {
  name: 'TheNavbarLeft',
  components: {ControlNavLeftButton},
  computed: {
    ...mapGetters({
      sessionIsLoggedIn: 'session/isLoggedIn',
      viewportIsSkinny: 'viewport/isSkinny'
    }),
    showLeftNav () {
      return this.sessionIsLoggedIn && !this.viewportIsSkinny
    }
  }
}
</script>

<style scoped>
.panel-navbar-left {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100px;
  padding-right: 0;
  padding-top: 80px;
  border-right-width: 5px;
  border-right-style: solid;
  border-right-color: var(--clauto-gray);
}
.panel-navbar-left-enter-active, .panel-navbar-left-leave-active {
  transition: left 1s;
  left: 0;
}
.panel-navbar-left-enter, .panel-navbar-left-leave-to {
  left: -120px;
}
</style>
