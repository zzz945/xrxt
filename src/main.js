import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './pages/home.vue'
import Officials from './pages/officials.vue'
import Targets from './pages/targets.vue'

import store from './vuex/store'

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/officials', component: Officials },
  { path: '/targets', component: Targets }
]

const router = new VueRouter({
  routes
})

new Vue({
  router: router,
  el: '#app',
  store,
  render: h => h(App)
})