import util from '@/util'

import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '@/views/LoginPage/LoginPage'
import MainPage from '@/views/MainPage/MainPage'
import UsersPage from '@/views/UsersPage/UsersPage'

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

var nameToTitle = function (name) {
  if (util.isDev()) {
    return '[DEV] ' + name
  } else {
    return name
  }
}

router.beforeEach((to, from, next) => {
  document.title = nameToTitle(to.name)
  next()
})

export default router
