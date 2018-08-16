<template>
  <form :id="'Form' + name">
    <div :class="{'hcenter':horizontalCompact}">
      <table
        ref="formTable"
        :id="'Form' + name + 'Table'"
      />
    </div>
    <div :class="{'hcenter': horizontalCompact}">
      <input
        :id="'Form' + name + 'Submit'"
        :value="submitLabel"
        type="button"
        class="button"
        @click="submit"
      >
      <span
        v-if="!horizontalCompact"
        class="error error-form error-form-submit"
      >
        {{ error }}
      </span>
    </div>
    <div
      v-if="horizontalCompact"
      class="error error-form error-form-submit"
      style="text-align:center; padding-top:10px;"
    >
      {{ error }}
    </div>
  </form>
</template>

<script>
import Vue from 'vue'
import FormInputText from '@/components/Form/Input/FormInputText'
import FormInputPassword from '@/components/Form/Input/FormInputPassword'

export default {
  name: 'Form',
  components: {FormInputText, FormInputPassword},
  props: {
    name: {type: String, default: 'Form'},
    horizontalCompact: {type: Boolean, default: false},
    submitLabel: {type: String, default: 'Submit'},
    action: {type: Function, default: async () => {}},
    onSuccess: {type: Function, default: () => {}},
    renderError: {type: Function, default: e => e.response.data},
    pingAfterAction: {type: Boolean, default: true},
    refreshAfterAction: {type: Boolean, default: true},
    clearAfterAction: {type: Boolean, default: false},
    inputs: {type: Array, default: () => []}
  },
  data () {
    return {
      inputComponents: [],
      error: ''
    }
  },
  computed: {
    inputValues () {
      return this.inputComponents.reduce((acc, cur, i) => {
        acc[cur.inputName] = cur.input
        return acc
      }, {})
    }
  },
  mounted () {
    this.inputComponents = this.inputs.map(input => {
      var InputClass
      switch (input.type) {
        case 'text':
          InputClass = Vue.extend(FormInputText)
          break
        case 'password':
          InputClass = Vue.extend(FormInputPassword)
          break
      }
      var inputComponent = new InputClass({propsData: input.props})
      inputComponent.$mount()
      this.$refs.formTable.appendChild(inputComponent.$el)
      return inputComponent
    })
  },
  methods: {
    clearErrors () {
      for (var i in this.inputComponents) {
        this.inputComponents[i].clearError()
      }
      this.error = ''
    },
    clearFields () {
      for (var i in this.inputComponents) {
        this.inputComponents[i].clear()
      }
    },
    clear () {
      this.clearFields()
      this.clearErrors()
    },
    submit () {
      this.clearErrors()
      var valid = true
      for (var i in this.inputComponents) {
        if (this.inputComponents[i].check()) valid = false
      }
      if (valid) {
        this.action(this.inputValues)
          .then((r) => {
            this.onSuccess(r)
            if (this.refreshAfterAction) {
              if (this.pingAfterAction) {
                this.$store.dispatch('session/pingRefresh')
              } else {
                this.$store.dispatch('session/refresh')
              }
            }
            if (this.clearAfterAction) this.clear()
          })
          .catch((e) => {
            this.error = this.renderError(e)
          })
      }
    }
  }
}
</script>
