<template>
  <button
    :id="'ControlNavLeftButton' + buttonText"
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
  name: 'ControlNavLeftButton',
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

<style>
.navButton {
  background-color: var(--clauto-orange);
  border-color: var(--clauto-gray);
  color: var(--clauto-green);
  font-weight: bolder;
  padding: 10px 10px;
  margin-bottom: 10px;
  width: 100%;
  border-style: solid;
  border-width: 5px;
  border-radius: 0;
  -webkit-appearance: none;
  float: right;
  position: relative;
  left: 5px;
}
.navButton:hover {
  background-color: var(--clauto-orange-light);
  border-color: var(--clauto-green);
}
.navButton:active {
  background-color: var(--clauto-green-light);
  color: var(--clauto-gray);
}
.navButton:focus {
  outline: 0px;
}
.navButton:disabled {
  background-color: var(--clauto-orange-light);
  border-right-width: 0;
  padding-right: 15px;
}
</style>
