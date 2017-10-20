import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Ranking from '@/components/Ranking';
import index from '@/components/index';
import Search from '@/components/Search';
import child from '@/components/child';
import sign from '@/components/sign';
import register from '@/components/register';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/aaaa',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/Ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/child',
      name: 'child',
      component: child
    },
    {
      path: '/sign',
      name: 'sign',
      component: sign
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
