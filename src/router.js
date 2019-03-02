import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {title: 'Login'},
      component: () => import('./views/Login.vue')
    },
    {
      name: 'auth',
      path: '/auth',
      meta: { auth: true },
      component: () => import('./components/app-master.vue'),
      children: [
        {
          name: 'home',
          path: 'home',
          meta: {
            title: 'KOTEI CONGREGATION'
          },
          component: () => import('./views/Home.vue')
        },
        {
          name: 'edit-home',
          path: 'edit-home',
          meta: {
            title: 'KOTEI CONGREGATION'
          },
          component: () => import('./views/EditHome.vue')
        },
        {
          name: 'publishers',
          path: 'publishers',
          meta: { title: 'PUBLISHERS'},
          component: () => import('./views/Publishers.vue')
        }
      ]
    }
  ]
})
