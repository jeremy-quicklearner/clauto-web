<template>
    <div id="TheNavbar">
        <router-link to="/">Main</router-link>
        <router-link to="/users">Users</router-link>
        <MainPage  v-if="content.component=='MainPage'"/>
        <UsersPage v-if="content.component=='UsersPage'"/>
    </div>
</template>

<script>
    import MainPage from '@/views/MainPage/MainPage'
    import UsersPage from '@/views/UsersPage/UsersPage'

    export default {
        name: 'TheNavbar',
        props: ['content'],
        components: {
            MainPage,
            UsersPage
        }
    }
</script>