import Vue from 'vue'
import Router from 'vue-router'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'City',
      component: City
    }
  ]
})
