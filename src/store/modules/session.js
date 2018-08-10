import apiDispatch from '@/api/dispatch'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

export default {
    namespaced: true,
    state: {
        username: null,
        privilegeLevel: 0,
        expires: 0
    },
    getters: {
        isLoggedIn(state, getters, rootState) {
            return (state.username !== null)
        },
        username(state, getters, rootState) {
            return state.username;
        },
        privilegeLevel(state, getters, rootState) {
            return state.privilegeLevel;
        },
        expires(state, getters, rootState) {
            return state.expires;
        }
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        setPrivilegeLevel(state, privilegeLevel) {
            state.privilegeLevel = privilegeLevel;
        },
        setExpires(state, expires) {
            state.expires = expires;
        }
    },
    actions: {
        async refresh({commit}) {
            try {
                var claims = jwtDecode(Cookies.get('JWT'));
                commit('setUsername', claims.username);
                commit('setPrivilegeLevel', claims.privilege_level);
                commit('setExpires', claims.exp);
            } catch (InvalidTokenError) {
                commit('setUsername', null);
                commit('setPrivilegeLevel', 0);
                commit('setExpires', 0);
            }
        },

        async pingRefresh({commit, dispatch}) {
            try {
                await apiDispatch.get('/ping_public');
            } catch(e) {
                console.log(e);
                return;
            }
            await dispatch('session/refresh');
        },

        async kill({commit}) {
            Cookies.set('JWT', null);
            commit('setUsername', null);
            commit('setPrivilegeLevel', 0);
            commit('setExpires', 0);
        }
    }
}