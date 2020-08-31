import Vue from 'vue'
import Router from 'vue-router'
const routepush = Router.prototype.push

Router.prototype.push = function (path) {
  return routepush.call(this, path).catch(err => {})
}
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //       path: '/',
    //       name: 'Housing_info',
    //       component: () => import('../components/Housing_info')
    //   },
    //   {
    //       path: '/',
    //       name: 'Housing_des',
    //       component: () => import('../components/Housing_des')
    //   },
    //   {
    //       path:'/',
    //       name:'Housing_main',
    //       component : ()=> import('../components/Housing_main')
    //   }
    //   {
    //       path: '/',
    //       name: 'Housing_search',
    //       component: () => import('../components/Housing_search')
    //   }
      {
          path: '/',
          name: 'Housing_details',
          component: () => import('../components/Housing_details')
      }
  ]
})
