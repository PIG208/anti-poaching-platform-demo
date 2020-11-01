import Vue from 'vue'
import App from './App'
import Home from './pages/Home'
import Search from './pages/Search'
import Error from './pages/Error'
import VueRouter from 'vue-router'

const routes = [
  { path: '/home', component: Home },
  { path: '/search', component: Search },
  { path: '/error', component: Error }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
