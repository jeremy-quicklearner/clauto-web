<template>
  <transition name="pageWipe">
    <div
      v-if="isWiping"
      id="pageWipe"
    />
  </transition>
</template>

<script>
export default {
  name: 'ThePageWiper',
  data () {
    return {
      isWiping: false,
      callerReady: false,
      animReady: false
    }
  },
  methods: {
    maybeFinish () {
      if (this.callerReady && this.animReady) {
        this.isWiping = false
      }
    },
    start (onStarted) {
      this.isWiping = true
      this.callerReady = false
      this.animReady = false
      setTimeout(() => {
        this.animReady = true
        onStarted()
        this.maybeFinish()
      }, 500)
    },
    end () {
      this.callerReady = true
      this.maybeFinish()
    }
  }
}
</script>

<style>

/*
The formulae for calc() are all derived algebraically.
The derivation is probably documented someplace
*/
#pageWipe {
  --one-over-root-two: 0.70710678;
  --d1: calc(var(--one-over-root-two) * 100vh);
  --d3: calc(var(--one-over-root-two) * (100vw + 2 * 100vh));

  z-index: 99;
  height: 100%;
  width: calc(100vw + 2 * 100vh);
  position: absolute;
  top: 0%;
  background-image: linear-gradient(
    135deg,
    rgba(0,0,0,0)        0%,

    rgba(0,0,0,0)        var(--d1),
    var(--clauto-orange) var(--d1),

    var(--clauto-orange) var(--d3),
    rgba(0,0,0,0)        var(--d3),

    rgba(0,0,0,0)        100%
  );
}
.pageWipe-enter-active {
  left: calc(0px - 100vh);
  transition: left 0.5s ease-out;
}
.pageWipe-leave-active {
  left: calc(0px + 100vh);
  transition: left 0.5s ease-in;
}

.pageWipe-enter {
  left: calc(0px + 100vw);
}
.pageWipe-leave-to {
  left: calc(0px - 100vw - 2 * 100vh);
}

</style>
