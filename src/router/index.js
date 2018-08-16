import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '@/views/LoginPage'
import MainPage from '@/views/MainPage'
import UsersPage from '@/views/UsersPage'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Clauto Login',
      component: LoginPage
    }, {
      path: '/',
      name: 'Clauto',
      component: MainPage
    }, {
      path: '/users',
      name: 'Clauto Users',
      component: UsersPage
    }
  ],
  mode: 'history'
})

export default router
