<template>
  <div id="TheNavbar">
    <router-link
      to="/"
      @click.native="onClick"
    >
      Main
    </router-link>
    <router-link
      to="/users"
      @click.native="onClick"
    >
      Users
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',
  methods: {
    onClick () {
      this.$store.dispatch('session/pingRefresh')
    }
  }
}
</script>
