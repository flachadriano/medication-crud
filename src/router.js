import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('./views/Add.vue')
    },
    {
      path: '/view/:id',
      name: 'view',
      component: () => import('./views/View.vue')
    },
    {
      path: '/delete/:id',
      name: 'delete',
      component: () => import('./views/Delete.vue')
    }
  ],
  mode: 'history'
})
