<template>
  <tr :ref="inputName">
    <td
      v-if="!horizontalCompact"
      class="label label-input"
    >
      {{ inputName }}
    </td>
    <td>
      <div
        v-if="horizontalCompact"
        class="label label-input"
      >
        {{ inputName }}
      </div>
      <input
        v-model="input"
        :class="{ 'text-invalid': error && !correcting, 'text-correcting': correcting, 'text': true }"
        :style="'width:' + width + ';'"
        :placeholder="inputName"
        :name="name"
        type="password"
      >
      <div
        v-if="horizontalCompact"
        class="error error-form error-form-input"
      >
        {{ error }}
      </div>
    </td>
    <td
      v-if="!horizontalCompact"
      class="error error-form error-form-input"
    >
      {{ error }}
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    inputName: {type: String, default: 'Password'},
    horizontalCompact: {type: Boolean, default: false},
    width: {type: String, default: '200px'},
    canBeBlank: {type: Boolean, default: false},
    extraValidation: {type: Function, default: input => ''}
  },
  data () {
    return {
      name: 'FormInputPassword',
      input: '',
      error: '',
      correcting: false
    }
  },
  watch: {
    input () {
      if (this.error) {
        this.correcting = true
      }
    }
  },
  created () {
    this.name = 'FormInputPassword' + this.inputName
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
      this.input = ''
    },
    clearError () {
      this.error = ''
      this.correcting = false
    }
  }
}
</script>
