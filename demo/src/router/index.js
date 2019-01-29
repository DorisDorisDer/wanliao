import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import logo from '@/logo/logo'
import tableqie from '@/tableqie/tableqie'
import day1 from '@/tableqie/day1/day1'
import day2 from '@/tableqie/day1/day2'
import day3 from '@/tableqie/day1/day3'
import lunbo from '@/lunbo/lunbo'
import xiao from '@/xiao/xiao'
import deng from '@/logo/deng/deng'
import zuce from '@/logo/deng/zuce'
import huan from '@/huan/huan'
import luntan from '@/luntan/luntan'
import fen_1_1 from '@/luntan/fen/fen_1/fen_1_1'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'logo',
      component: logo
    },
    {
      path: '/logo',
      name: 'tableqie',
      component: tableqie
    },
    {
      path: '/tableqie',
      name: 'day1',
      component: day1
    },
    {
      path: '/tableqie',
      name: 'day2',
      component: day2
    },
    {
      path: '/tableqie',
      name: 'day3',
      component: day3
    },
    {
      path: '/logo',
      name: 'lunbo',
      component: lunbo
    },
    {
      path: '/logo',
      name: 'xiao',
      component: xiao
    },
    {
      path: '/deng',
      name: 'deng',
      component: deng
    },
    {
      path: '/zuce',
      name: 'zuce',
      component: zuce
    },
    {
      path: '/luntan',
      name: 'luntan',
      component: luntan
    },
    {
      path: '/fen1',
      name: 'fen_1_1',
      component: fen_1_1
    }
  ]
})
