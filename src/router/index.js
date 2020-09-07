import Vue from 'vue'
import Router from 'vue-router'
const routepush = Router.prototype.push

Router.prototype.push = function (path) {
  return routepush.call(this, path).catch(err => {})
}
Vue.use(Router)

export default new Router({
  routes: [
    {
          path: '/',
          name: 'Housing_main',
          component: () => import('../components/Housing_main')
      },
      {
          path: '/Housing_des',
          name: 'Housing_des',
          component: () => import('../components/Housing_des')
      }
      ,{
          path: '/Housing_fac',
          name: 'Housing_fac',
          component: () => import('../components/Housing_fac')
      },
    {
          path: '/Housing_info',
          name: 'Housing_info',
          component: () => import('../components/Housing_info')
      },
      {
          path: '/Housing_personal',
          name: 'Housing_personal',
          component: () => import('../components/Housing_personal')
      },
      {
          path: '/Housing_fdpersonal',
          name: 'Housing_fdpersonal',
          component: () => import('../components/Housing_fdpersonal')
      },
      {
          path: '/Housing_search',
          name: 'Housing_search',
          component: () => import('../components/Housing_search')
      },
      {
          path: '/Housing_details',
          name: 'Housing_details',
          component: () => import('../components/Housing_details')
      },
      {
          path: '/Housing_header',
          name: 'Housing_header',
          component: () => import('../components/Housing_header')
      }
  ]
})
