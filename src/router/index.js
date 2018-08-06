import util from '@/util/util.js'

import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '@/views/LoginPage/LoginPage'
import TheNavbar from '@/components/TheNavbar/TheNavbar'

Vue.use(Router)

var router = new Router({
    routes: [
        {
            path: '/login',
            name: 'Clauto Login',
            component: LoginPage
        },
        {
            path: '/',
            name: 'Clauto',
            component: TheNavbar,
            props: {content: {component: 'MainPage', props: {}}}
        },
        {
            path: '/users',
            name: 'Clauto Users',
            component: TheNavbar,
            props: {content: {component: 'UsersPage', props: {}}}
        }
    ],
    mode: 'history'
})

var nameToTitle = function (name) {
    if (util.isDev())
        return "[DEV] " + name;
    else
        return name;
}

router.beforeEach((to, from, next) => {
    document.title = nameToTitle(to.name);
    next();
  })
  
export default router