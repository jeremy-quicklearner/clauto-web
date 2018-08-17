import apiSystem from '@/api/system'

export default {
  namespaced: true,
  state: {
    name: 'Clauto'
  },
  getters: {
    getName (state, getters, rootState) {
      return state.name
    }
  },
  mutations: {
    setName (state, name) {
      state.name = name
    }
  },
  actions: {
    async update ({commit}) {
      var name
      try {
        name = await apiSystem.sysname()
      } catch (e) {
        console.log(e)
        return
      }
      commit('setName', name)
    }
  }
}
