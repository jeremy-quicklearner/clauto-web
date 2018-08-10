<template>
    <div id="TheNavbar">
        <router-link to="/"      v-on:click.native="onClick">Main</router-link>
        <router-link to="/users" v-on:click.native="onClick">Users</router-link>
    </div>
</template>

<script>

    import apiPing from '@/api/ping'

    export default {
        name: 'TheNavbar',
        methods: {
            onClick() {
                this.$store.dispatch('session/pingRefresh')
            }
        }
    }
</script>