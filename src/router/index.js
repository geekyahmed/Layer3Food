import Vue from 'vue'

import Router from 'vue-router'

import BootstrapVue from 'bootstrap-vue'

import Contact from '../views/Contact.vue'


Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
  {
     path: '/contact',
    component: Contact
  }
  ]
})
