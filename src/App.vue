<template>
    <div>
        <TheNavbar v-if="showNavbar" />
        <router-view/>
    </div>
</template>

<script>
    import TheNavbar from '@/components/TheNavbar/TheNavbar'

    export default {
        name: 'App',
        components: {TheNavbar},
        computed: {
            showNavbar: function(){
                return this.$store.getters['session/isLoggedIn'];
            }
        }
    }
</script>

<style lang="css">
    @import 'App.css';
</style>
