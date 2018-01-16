import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/Home'
import Details from '@/page/Details'
import Add from '@/page/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
