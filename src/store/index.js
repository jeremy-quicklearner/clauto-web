import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

import session from './modules/session'


Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [
        vuexPersistedState({
            key: 'Vuex',
            // Use Cookies to persist the state
            storage: {
                getItem: key => Cookies.get(key),
                setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
                removeItem: key => Cookies.remove(key)
            },
            paths: [
                'session.username',
                'session.privilegeLevel',
                'session.expires'
            ]
        })
    ],
    modules: {
        session
    }
})