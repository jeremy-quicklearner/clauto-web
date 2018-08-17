<template>
  <transition name="panel-navbar-top">
    <div
      v-if="showNavbarWide"
      id="TheNavbarTopWide"
      class="panel panel-navbar-top"
    >
      <h1 class="systemName">
        {{ systemName }}
      </h1>
      <ControlButton
        :on-click="onClickLogout"
        button-text="Logout"
        style="float: right; margin-right: 20px;"
      />
    </div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import ControlButton from '@/components/Control/ControlButton'

export default {
  name: 'TheNavbarTopWide',
  components: {ControlButton},
  data () {
    return {
      links: []
    }
  },
  computed: {
    ...mapGetters({
      systemName: 'system/getName',
      sessionIsLoggedIn: 'session/isLoggedIn',
      viewportIsSkinny: 'viewport/isSkinny'
    }),
    showNavbarWide () {
      return this.sessionIsLoggedIn && !this.viewportIsSkinny
    }
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

.systemName {
   position: absolute;
   top: 4px;
   color: var(--clauto-green);
}
</style>
