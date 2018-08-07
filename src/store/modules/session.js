import api from '@/api'

export default {
    namespaced: true,
    state: {
        username: '',
        privilegeLevel: 0,
    },
    getters: {
        isLoggedIn(state, getters, rootState) {
            return (state.username != '')
        },
        username(state, getters, rootState) {
            return state.username;
        },
        privilegeLevel(state, getters, rootState) {
            return state.privilegeLevel;
        },
    },
    mutations: {
        setUsername(state, {username}){
            state.username = username;
        },
        setPrivilegeLevel(state, {privilegeLevel}){
            state.privilegeLevel = privilegeLevel;
        },
    },
    actions: {
        async login({commit}, {username, password, onFail}) {
            var resp;
            try {
                resp = await api.post('/user/login', {username: username, password: password})
                resp = await api.get('/user/me')
            } catch (error) {
                onFail(error.response);
            }

            commit('setUsername', {username: resp.data.username});
            commit('setPrivilegeLevel', {privilegeLevel: resp.data.privilege_level});
        },
        async logout({commit}) {
            // TODO: Somehow clear the cookie
            commit('setUsername', '')
            commit('setPrivilegeLevel', 0)
        }
    }
}