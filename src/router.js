import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './views/login.vue'
import selectionOne from './views/selectionOne.vue'
import selectionTwo from './views/selectionTwo.vue'
import selectionThree from './views/selectionThree.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      
      children: [
          {path: '1',
          name: 'selectionOne',
          component: selectionOne},
          {path: '2',
          name: 'selectionTwo',
          component: selectionTwo},
          {path: '3',
          name: 'selectionThree',
          component: selectionThree}
        ]
      
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
