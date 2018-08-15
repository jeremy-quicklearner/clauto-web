<template>
  <button
    :id="'TheNavbarButton' + buttonText"
    :disabled="!enabled"
    type="button"
    class="navButton"
    @click="click"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: 'TheNavbarButton',
  props: {
    buttonText: {type: String, default: 'Link'},
    destPath: {type: String, default: '/'}
  },
  computed: {
    enabled () {
      return (this.$route.path !== this.destPath)
    }
  },
  methods: {
    click () {
      this.$store.dispatch('session/pingRefresh')
      this.$router.push(this.destPath)
    }
  }
}
</script>
