import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import LOL from '@/views/Game/lol'
import Error from '@/views/NotFound/error'
import Basketball from '@/views/Sport/basketball'
import Login from '@/views/Login/index'
import Layout from '@/layouts/index.vue'
import lst from "@/utils/lst.js";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          component: Index,
          name: 'index'
        }
      ]
    },
    {
      path: '/game',
      component: Layout,
      children: [
        {
          path: 'lol',
          name: 'lol',
          component: LOL
        }
      ]
    },
    {
      path: '/sport',
      component: Layout,
      children: [
        {
          path: 'basketball',
          name: 'basketball',
          component: Basketball
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      component: Layout,
      children: [
        {
          path: '',
          name: 'error',
          component: Error
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = lst.getLst('token')
  if (token) {
    next()
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next({ name: 'login' })
    }
  }
})

export default router


