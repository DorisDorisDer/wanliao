<template>
  <div>
    <!-- <img src="./assets/logo.png">
    <router-view></router-view> -->
    <!--my-header:引入头部header组件-->
    <my-header :seller="seller"></my-header>
    <!--导航部分:使用路由-->
    <div class="tab">
      <div class="tab-item">
        <!--商品(路由)-->
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!--根据路由要显示出来的不同内容-->
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
//  引入header
import myHeader from './components/header/header'
import Vue from 'vue'
//  引入axios用于请求数据
import Axios from 'axios'
// 将axios这个对象添加到Vue的$http这个属性上,就可以在vue中通过axios请求数据
Vue.prototype.$http = Axios
// 请求数据的路径
let url = 'http://localhost:83/static/data.json'
export default {
  // 注册头部组件
  components: {
    'my-header': myHeader
  },
  // 声明seller(对象),用于存储请求得到的json数据(中的seller对象)
  data: function () {
    return {
      seller: {}
    }
  },
  // 在实例创建时执行,用于通过axios获取数据
  created: function () {
  //  console.log('我会被执行吗?', url)
    // 将this(此时是vm)赋给self
    let self = this
    // 通过axios获取数据
    Axios.get(url).then(function (res) {
    //  console.log(res)
    //  console.log(self.resData)
      // 将获取到的数据赋给在data中声明过的seller.
      self.seller = res.data.seller
    //  console.log(self.seller)
    })
  }
}
</script>
// 引入stylus预编译样式 ,scoped限定样式范围
<style lang="stylus" rel="stylesheet/stylus" scoped>
// 引入min.styl
  @import "./common/stylus/mixin.styl"
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    //  border-bottom:1px solid rgba(7,17,27,0.1)
    // 使用border-1px这个函数(从mixin.styl)获取
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex 1
      text-align center
      & > a
        display block
        font-size: 14px
        color: rgb(77,85,93)
        &.myAcitve
          color: rgb(240,20,20)
</style>
