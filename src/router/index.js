import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Details from '@/page/Details'
import Add from '@/page/Add'
import Search from '@/page/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details
    },
    {
      path: '/Add',
      name: 'Add',
      component: Add
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
