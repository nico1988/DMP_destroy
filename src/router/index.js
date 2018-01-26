import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Login from '@/page/Login'
import Details from '@/page/Details'
import Add from '@/page/Add'
import Search from '@/page/Search'
import PersonDetail from '@/page/PersonDetail'
import NotFound from '@/page/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
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
    },
    {
      path: '/PersonDetail',
      name: 'PersonDetail',
      component: PersonDetail
    },
    {
      path: '/*',
      name: '404',
      component: NotFound
    }
  ]
})
