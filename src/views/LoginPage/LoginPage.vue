<template>
  <div
    id="LoginPage"
    class="page-nonav hcenter vcenter"
  >
    <div class="panel">
      <h1 style="text-align:center; min-width: 220px;">C L A U T O</h1>
      <Form
        :name="'Login'"
        :horizontalCompact="true"
        :submitLabel="'Login'"
        :action="loginAction"
        :pingAfterAction="false"
        :refreshAfterAction="false"
        :clearAfterAction="true"
        :inputs="[
          {type: 'text', props: {inputName: 'Username', horizontalCompact: true}},
          {type: 'password', props: {inputName: 'Password', horizontalCompact: true}}
        ]"
      />
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form/Form'
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
