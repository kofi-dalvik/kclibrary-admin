import Vue from 'vue'
import Router from 'vue-router'
import store from './store';

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'login',
    meta: {
      title: 'Login'
    },
    component: () => import('./views/Login.vue')
  },
  {
    name: 'auth',
    path: '/auth',
    meta: {
      auth: true
    },
    component: () => import('./components/app-master.vue'),
    children: [{
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
        meta: {
          title: 'PUBLISHERS'
        },
        component: () => import('./views/Publishers.vue')
      },
      {
        name: 'settings',
        path: 'settings',
        meta: {
          title: 'SETTINGS'
        },
        component: () => import('./views/Settings.vue')
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.afterEach((to, from) => {
  store.dispatch('closeNav');
})

export default router;
