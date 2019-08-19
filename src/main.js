import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.css'
import Bootstrap from 'bootstrap-vue/dist/bootstrap.min.css'

Vue.use(Bootstrap)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
