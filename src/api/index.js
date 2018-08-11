import dispatch from './dispatch'
import store from '@/store'

export default {
  async get (endpoint, params = {}, on200, onNot200) {
    var result = await dispatch.get(endpoint, params, on200, onNot200)
    store.dispatch('session/refresh')
    return result
  },
  async patch (endpoint, params = {}, on200, onNot200) {
    var result = await dispatch.patch(endpoint, params, on200, onNot200)
    store.dispatch('session/refresh')
    return result
  },
  async post (endpoint, params = {}, on200, onNot200) {
    var result = await dispatch.post(endpoint, params, on200, onNot200)
    store.dispatch('session/refresh')
    return result
  },
  async del (endpoint, params = {}, on200, onNot200) {
    var result = await dispatch.del(endpoint, params, on200, onNot200)
    store.dispatch('session/refresh')
    return result
  }
}
