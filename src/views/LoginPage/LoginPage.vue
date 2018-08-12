<template>
  <div
    id="LoginPage"
    class="page"
  >
    <div class="hcenter vcentered">
      <div class="panel squeeze">
        <h1 style="text-align:center; margin-left: 30px; margin-right: 30px; min-width: auto;">C L A U T O</h1>
        <div class="centered">
          <Form
            :name="'Login'"
            :horizontalCompact="true"
            :submitLabel="'Login'"
            :action="loginAction"
            :pingAfterAction="false"
            :refreshAfterAction="false"
            :clearAfterAction="true"
            :inputs="[
              {type: 'text', props:{inputName: 'Username', horizontalCompact: true}},
              {type: 'password', props:{inputName: 'Password', horizontalCompact: true}}
            ]"
          />
        </div>
      </div>
    </div>
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
