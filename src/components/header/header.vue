<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="80" height="20"  :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}看心情
        </div>
        <!--
          v-if="seller.supports":因为数据是异步加载,需要再获取到数据后,
          即seller.supports这个数组中,有了数据,才可以获取到seller.supports[0],这个值
          classMap:是个数组,分别对应seller.supports中的5条数据,所以5条数据对应不同的5个字符串,
          而这5个字符串将绑定到class,所以5条数据对应不用的class名
        -->
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
        <!--
          v-if="seller.supports":因为数据是异步加载,需要再获取到数据后,
          即seller.supports这个数组中,有了数据,才可以获取到seller.supports[0],这个值
          classMap:是个数组,分别对应seller.supports中的5条数据,所以5条数据对应不同的5个字符串,
          而这5个字符串将绑定到class,所以5条数据对应不用的class名
        -->
      <!--showDetail:点击事件,作用:用于显示弹窗(信息)-->
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <!--showDetail:点击事件,作用:用于显示弹窗(信息)-->
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!--头部的背景图片-->
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <!--transition内的区域将具有过渡效果:name:fade,是过渡样式的前缀,如.fade-enter-active中.fade-->
    <transition name="fade">
      <!--v-show="detailShow":用于判断是否显示弹窗(信息)-->
      <div v-show="detailShow" class="detail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
        <!--
          v-if="seller.supports":因为数据是异步加载,需要再获取到数据后,
          即seller.supports这个数组中,有了数据,才可以获取到seller.supports[0],这个值
          
          classMap:是个数组,分别对应seller.supports中的5条数据,所以5条数据对应不同的5个字符串,
          而这5个字符串将绑定到class,所以5条数据对应不用的class名
        -->
            <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="(item,index) in seller.supports" :key="index">
                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                <span class="text">{{seller.supports[index].description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from '../star/star'

  export default {
    // 接受从父组件传过来的值,seller
    props: {
      seller: {
        type: Object
      }
    },
    // 声明变量detailshow : 用于操作弹窗是否显示
    data () {
      return {
        detailShow: false
      }
    },
    methods: {
      // 显示弹窗
      showDetail () {
        this.detailShow = true
      },
      // 关闭弹窗
      hideDetail () {
        this.detailShow = false
      }
    },
    // 在创建实例时,向实例(this)添加数组classMap,用于存储上面对应seller.supports中的5条数据
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    // 注册组件star(星星打分)
    components: {
      star
    }
  }
</script>
// 引入stylus预编译样式 ,scoped限定样式范围
// 引入min.styl
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"

  .header

    position: relative
    overflow: hidden
    color: #fff
    background: rgba(7, 17, 27, 0.5)
    .content-wrapper
      position: relative
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
        vertical-align: top
        img
          border-radius: 2px
      .content
        display: inline-block
        margin-left: 16px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            vertical-align: top
            width: 30px
            height: 18px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            line-height: 18px
            font-weight: bold

        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
        .support
          .icon
            display: inline-block
            vertical-align: top
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            line-height: 12px
            font-size: 10px

      .support-count
        position: absolute
        right: 12px
        bottom: 14px
        padding: 0 8px
        height: 24px
        line-height: 24px
        border-radius: 14px
        background: rgba(0, 0, 0, 0.2)
        text-align: center
        .count
          vertical-align: top
          font-size: 10px
        .icon-keyboard_arrow_right
          margin-left: 2px
          line-height: 24px
          font-size: 10px
          &:after
            display inline-block
            position relative
            top 1px
            content:url(left.png)
    .bulletin-wrapper
      position: relative
      height: 28px
      line-height: 28px
      padding: 0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background: rgba(7, 17, 27, 0.2)
      .bulletin-title
        display: inline-block
        vertical-align: top
        margin-top: 8px
        width: 22px
        height: 12px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        vertical-align: top
        margin: 0 4px
        font-size: 10px
      .icon-keyboard_arrow_right
        position: absolute
        font-size: 10px
        right: 12px
        top: 8px
        &:after
          display inline-block
          position relative
          top -5px
          right  -3px
          content:url(left.png)

    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)
    .detail
      position: fixed
      z-index: 100
      top: 0
      left: 0
      width: 100%
      height: 100%
      overflow: auto
      backdrop-filter: blur(10px)
      opacity: 1
      background: rgba(7, 17, 27, 0.8)
      &.fade-enter-active, &.fade-leave-active
        transition: all 0.5s
      &.fade-enter, &.fade-leave-active
        opacity: 0
        background: rgba(7, 17, 27, 0)
      .detail-wrapper
        width: 100%
        .detail-main
          margin-top: 64px
          padding-bottom: 64px
          .name
            line-height: 16px
            text-align: center
            font-size: 16px
            font-weight: 700
          .star-wrapper
            margin-top: 18px
            padding: 2px 0
            text-align: center
          .title
            display: flex
            width: 80%
            margin: 28px auto 24px auto
            .line
              flex: 1
              position: relative
              top: -6px
              border-bottom: 1px solid rgba(255, 255, 255, 0.2)
            .text
              padding: 0 12px
              font-weight: 700
              font-size: 14px

          .supports
            width: 80%
            margin: 0 auto
            .support-item
              padding: 0 12px
              margin-bottom: 12px
              font-size: 0
              &:last-child
                margin-bottom: 0
              .icon
                display: inline-block
                width: 16px
                height: 16px
                vertical-align: top
                margin-right: 6px
                background-size: 16px 16px
                background-repeat: no-repeat
                &.decrease
                  bg-image('decrease_2')
                &.discount
                  bg-image('discount_2')
                &.guarantee
                  bg-image('guarantee_2')
                &.invoice
                  bg-image('invoice_2')
                &.special
                  bg-image('special_2')
              .text
                line-height: 16px
                font-size: 12px
          .bulletin
            width: 80%
            margin: 0 auto
            .content
              padding: 0 12px
              line-height: 24px
              font-size: 12px
      .detail-close
        position: relative
        width: 32px
        height: 32px
        margin: 0px auto 0 auto
        clear: both
        font-size: 32px
        top: 20px
        background-image:url(close.png)
        background-repeat: no-repeat
        background-positon: center
</style>