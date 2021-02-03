import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'

Vue.use(Router)
const router = new Router({
  routes: routers
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

export default router
