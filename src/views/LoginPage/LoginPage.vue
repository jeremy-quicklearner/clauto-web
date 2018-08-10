<template>
    <div id="LoginPage">
        <p>Clauto login page</p>
        <form name="LoginForm">
            <input type="text" name="username" v-model="input.username" placeholder="Username" />
            <input type="password" name="password" v-model="input.password" placeholder="Password" />
            <button type="button" v-on:click="login">Login</button>
        </form>
        <p v-if="loginFailed" style="color:red;">Login Failed: {{ loginFailReason }}</p>
    </div>
</template>

<script>
    import apiUser from '@/api/user'
    import {mapGetters} from 'vuex'

    export default {
        name: 'LoginPage',
        data() { return {
            input: {
                username: '',
                password: ''
            },
            loginFailReason: ''
        }},
        methods: {
            onLoginFail(result) {
                this.loginFailReason = result.response.data;
            },
            login() {
                this.loginFailReason = '';
                apiUser.login(
                    this.input.username,
                    this.input.password,
                    this.onLoginFail
                )
            }
        },
        computed: {
            loginFailed() {
                return this.loginFailReason != '';
            },
        },
    }
</script>