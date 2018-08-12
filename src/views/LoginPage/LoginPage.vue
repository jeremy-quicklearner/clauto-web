<template>
  <div id="LoginPage">
    <h1>Login</h1>
    <Form
      :name="'Login'"
      :submitLabel="'Login'"
      :action="loginAction"
      :pingAfterAction="false"
      :refreshAfterAction="false"
      :clearAfterAction="true"
      :inputs="[
        {type: 'text', props:{inputName: 'Username'}},
        {type: 'text', props:{inputName: 'Password'}}
      ]"
    />
  </div>
</template>

<script>
import Form from '@/components/form/Form'
import apiUser from '@/api/user'

export default {
  name: 'LoginPage',
  components: {Form},
  methods: {
    loginAction ({Username, Password}) {
      return apiUser.login(Username, Password)
    }
  }
}
</script>
