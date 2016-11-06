import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './pages/home.vue'

import { sync } from 'vuex-router-sync'
import store from './vuex/store'

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes
})

sync(store, router)

new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})