import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import LOL from '@/views/Game/lol'
import Error from '@/views/NotFound/error'
import Basketball from '@/views/Sport/basketball'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/game/lol',
      name: 'lol',
      component: LOL
    },
    {
      path: '/sport/basketball',
      name: 'basketball',
      component: Basketball
    },
    {
      path: '*',
      name: 'error',
      component: Error,
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})

export default router


