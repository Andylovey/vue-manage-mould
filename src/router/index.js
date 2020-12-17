import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import LOL from '@/views/game/lol'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
