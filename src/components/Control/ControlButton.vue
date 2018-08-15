<template>
  <button
    :id="'ControlButton' + buttonText"
    :disabled="!enabled"
    type="button"
    class="button"
    @click="click"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: 'ControlButton',
  props: {
    buttonText: {type: String, default: 'Link'},
    onClick: {type: Function, default: () => { alert('Button pressed: ' + this.buttonText) }}
  },
  data () {
    return {
      enabled: true
    }
  },
  methods: {
    click () {
      this.$store.dispatch('session/pingRefresh')
      this.onClick()
    },
    setEnabled (newEnabled) {
      this.enabled = newEnabled
    }
  }
}
</script>
