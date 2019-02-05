//  引入vue
import Vue from 'vue'
//  引入vue-router
import Router from 'vue-router'
// 引入组件Hello
//  import Hello from '@/components/Hello'
// 引入组件goods(商品)
import Goods from '@/components/goods/goods'
// 引入组件ratings(评论)
import Ratings from '@/components/ratings/ratings'
// 引入组件seller(商家)
import Seller from '@/components/seller/seller'
// 使用路由
Vue.use(Router)

// 配置路由,不用的路径对应不用的组件(显示不同内容)
export default new Router({
  //  给linkActiveClass别名
  linkActiveClass: 'myAcitve',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
    // ,
    // {
    // path: '/he',
    // component: Hello
   // }
  ]
})
