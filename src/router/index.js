import Vue from 'vue'
import VueRouter from 'vue-router'
import dlj from './dlj.js'


Vue.use(VueRouter)

const routes = [
  ...dlj, 
]                                                       

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
