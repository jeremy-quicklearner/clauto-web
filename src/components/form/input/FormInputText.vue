<template>
  <tr :ref="inputName">
    <td>
      {{ inputName }}
    </td>
    <td>
      <input
        v-model="input"
        :class="{ 'text text-invalid': error }"
        :placeholder="inputName"
        :name="name"
        type="text"
      >
    </td>
    <td>
      <span class="error error-form error-form-input">{{ error }}</span>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    inputName: {type: String, default: 'Text'},
    canBeBlank: {type: Boolean, default: false},
    extraValidation: {type: Function, default: input => ''}
  },
  data () {
    return {
      name: 'FormInputText',
      input: '',
      error: ''
    }
  },
  created () {
    this.name = 'FormInputText' + this.inputName
  },
  methods: {
    check () {
      this.error = ''
      if (this.input === '' && !this.canBeBlank) {
        this.error = this.inputName + ' is required'
        return this.error
      }
      this.error = this.extraValidation(this.input)
    },
    clear () {
      this.error = ''
      this.input = ''
    },
    clearError () {
      this.error = ''
    }
  }
}
</script>
