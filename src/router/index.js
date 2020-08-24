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
      name: 'Housing_info',
      component: () => import('../components/Housing_info')
    },{
          path:"*",
          name:"../../static/xzms/小猪民宿-住得更好，花得更少.html"
      }
  ]
})
