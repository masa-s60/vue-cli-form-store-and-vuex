import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'step1',
    component: () => import('../views/form-step1.vue'),
    props: true
  },
  {
    path: '',
    name: 'step2',
    component: () => import('../views/form-step2.vue'),
    props: true
  },
  {
    path: '',
    name: 'step3',
    component: () => import('../views/form-step3.vue'),
    props: true
  },
  {
    path: '',
    name: 'confirm',
    component: () => import('../views/confirm-display.vue'),
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
