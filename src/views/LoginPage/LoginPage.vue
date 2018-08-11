<template>
  <div id="LoginPage">
    <p>Clauto login page</p>
    <form name="LoginForm">
      <input
        v-model="input.username"
        type="text"
        name="username"
        placeholder="Username"
      >
      <input
        v-model="input.password"
        type="password"
        name="password"
        placeholder="Password"
      >
      <button
        type="button"
        @click="login"
      >
        Login
      </button>
    </form>
    <p
      v-if="loginFailed"
      style="color:red;"
    >
      Login Failed: {{ loginFailReason }}
    </p>
  </div>
</template>

<script>
import apiUser from '@/api/user'

export default {
  name: 'LoginPage',
  data () {
    return {
      input: {
        username: '',
        password: ''
      },
      loginFailReason: ''
    }
  },
  computed: {
    loginFailed () {
      return this.loginFailReason !== ''
    }
  },
  methods: {
    onLoginFail (result) {
      this.loginFailReason = result.response.data
    },
    login () {
      this.loginFailReason = ''
      apiUser.login(
        this.input.username,
        this.input.password,
        this.onLoginFail
      )
    }
  }
}
</script>
