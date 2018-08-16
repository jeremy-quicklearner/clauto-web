export default {
  namespaced: true,
  state: {
    width: 0,
    height: 0
  },
  getters: {
    isSkinny (state, getters, rootState) {
      return (state.width < 500)
    }
  },
  mutations: {
    setWidth (state, width) {
      state.width = width
    },
    setHeight (state, height) {
      state.height = height
    }
  },
  actions: {
    async update ({commit}, width, height) {
      commit('setWidth', width)
      commit('setHeight', height)
    }
  }
}
