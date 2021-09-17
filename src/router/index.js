import Vue from 'vue'
import VueRouter from 'vue-router'
import lmx from './lmx.js'

Vue.use(VueRouter)

const routes = [
  ...lmx
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
