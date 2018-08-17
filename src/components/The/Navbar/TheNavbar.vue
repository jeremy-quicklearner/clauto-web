<template>
  <span
    id="TheNavbar"
    style="z-index: 100; position: fixed;"
  >
    <TheNavbarTopWide/>
    <TheNavbarTopMobile/>
    <TheNavbarLeft/>
  </span>
</template>

<script>
import TheNavbarTopWide from '@/components/The/Navbar/TheNavbarTopWide'
import TheNavbarTopMobile from '@/components/The/Navbar/TheNavbarTopMobile'
import TheNavbarLeft from '@/components/The/Navbar/TheNavbarLeft'

export default {
  name: 'TheNavbar',
  components: {TheNavbarTopWide, TheNavbarTopMobile, TheNavbarLeft}
}
</script>
