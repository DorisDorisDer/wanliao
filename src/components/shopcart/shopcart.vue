<template>
  <div>
    <div class="shopcart">
      <!-- @click="toggleList"隐藏现实购物车列表-->
      <div class="content" @click="toggleList">
        <div class="content-left">
          <div class="logo-wrapper">
            <!--
              :class="{'highlight':totalCount>0}",购物车食品数量(不是种类)大于0时,显示高亮状态(添加.highlight这个类)
              totalCount是计算属性,得到的是购物车食品数量(不是种类)
            -->
            <div class="logo" :class="{'highlight':totalCount>0}">
              <i class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></i>
            </div>
            <!--
               v-show="totalCount>0" 购物车食品数量(不是种类)大于0时,显示
            -->
            <div class="num" v-show="totalCount>0">{{totalCount}}</div>
          </div>
          <!--
            :class="{'highlight':totalPrice>0}",当总价(最后需要支付的钱数)大于0时,显示高亮状态(添加.highlight这个类)
            totalPrice是计算属性,最后得到的是总价,需要支付的钱,下面totalPrice更详细介绍
          -->
          <div class="price" :class="{'highlight':totalPrice>0}">￥{{totalPrice}}</div>
          <!--
            deliveryPrice:是从父组件获取到的属性,配送费
            -->
          <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
        </div>
        <!--
           @click.stop.prevent="pay"
           点击事件,阻止单击事件冒泡,阻止事件默认行为,否则会触发购物车列表的方法,即会打开购物车列表
           pay支付方法
        -->
        <div class="content-right" @click.stop.prevent="pay">
          <!--
            :class="payClass"
            payClass是计算属性,得到不同样式,具体在下面计算属性详细介绍

            {{payDesc}}
            payDesc:是个计算属性,返回不同的结果内容,具体在下面计算属性详细介绍
          -->
          <div class="pay" :class="payClass">
            {{payDesc}}
          </div>
        </div>
      </div>
      <!--购物车小球-->
      <div class="ball-container">
        <div v-for="(ball,index) in balls" :key="index">
          <!--小球动画效果-->
          <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
            <div class="ball" v-show="ball.show">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
        </div>
      </div>
      <!--购物车列表动画效果-->
      <transition name="fold">
        <!--
          购物车列表
          v-show="listShow"
          listShow:是计算属性,根据listShow,用来隐藏显示购物车列表
          -->
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <!--
               @click="empty"点击事件,清空购物车
            -->
            <span class="empty" @click="empty">清空</span>
          </div>
          <!--
            ref="listContent":
            ref:better-scroll这个滚动插件中的一个属性,用于通过better-scroll中这个方法$refs获取我们需要操作的元素(对象)
          -->
          <div class="list-content" ref="listContent">
            <ul>
              <!--
                v-for="(food,index) in selectFoods"
                selectFoods:指购物车中的食品,是从goods组件传过来的值 购物车中选中的食品(是个对象),其中属性count表示数量

                food是购物车中每一类食物

              -->
              <li class="food" v-for="(food,index) in selectFoods" :key="index">
                <span class="name">{{food.name}}</span>
                <div class="price">
                  <span>￥{{food.price*food.count}}</span>
                </div>
                
                <div class="cartcontrol-wrapper">
                  <!--添加,减少组件-->
                  <cartcontrol @add="addFood" :food="food"></cartcontrol>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <!--弹出购物车列表时,购物车上部到手机顶部蒙版过渡效果-->
    <transition name="fade">
      <!--
        弹出购物车列表时,购物车上部到手机顶部蒙版
         @click="hideList":点击关闭蒙版
         v-show="listShow":listShow:是计算属性,根据listShow,用来隐藏显示购物车蒙版
        -->
      <div class="list-mask" @click="hideList" v-show="listShow"></div>
    </transition>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  // 引入添加,减少(食品)组件
  import cartcontrol from '../cartcontrol/cartcontrol'

  export default {
    props: {
      // 接收 选中食品,即购物车中食品
      selectFoods: {
        type: Array,
        // 默认值
        default () {
          return [
            {
              price: 10,
              count: 1
            }
          ]
        }
      },
      // 配送费
      deliveryPrice: {
        type: Number,
        default: 0
      },
      // 最低起送费
      minPrice: {
        type: Number,
        default: 0
      }
    },
    data () {
      // 五个小球,用于实现小球飞入购物车
      return {
        balls: [
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ],
        // 小球落下
        dropBalls: [],
        // 购物车隐藏显示
        fold: true
      }
    },
    computed: {
      // 总价
      totalPrice () {
        let total = 0
        this.selectFoods.forEach((food) => {
          total += food.price * food.count
        })
        return total
      },
      // 总数量
      totalCount () {
        let count = 0
        this.selectFoods.forEach((food) => {
          count += food.count
        })
        console.log('count:', count)
        return count
      },
      // 根据总价和最低起送费,去判断是否可以结算,
      payDesc () {
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}元起送`
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice
          return `还差￥${diff}元起送`
        } else {
          return '去结算'
        }
      },
      // 根据总价和最低起送费,返回class类名,显示不同状态
      payClass () {
        if (this.totalPrice < this.minPrice) {
          return 'not-enough'
        } else {
          return 'enough'
        }
      },
      // 用来隐藏/显示购物车列表.显示/隐藏购物车上部的蒙版
      listShow () {
        if (!this.totalCount) {
          this.fold = true
          return false
        }
        let show = !this.fold
        if (show) {
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.listContent, {
                click: true
              })
            } else {
              this.scroll.refresh()
            }
          })
        }
        return show
      }
    },
    methods: {
      // 小球飞过的方法
      drop (el) {
        console.log(el)
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i]
          if (!ball.show) {
            ball.show = true
            ball.el = el
            this.dropBalls.push(ball)
            return
          }
        }
      },
      // 隐藏/显示购物车列表
      toggleList () {
        if (!this.totalCount) {
          return
        }
        this.fold = !this.fold
      },
      // 关闭购物车列表
      hideList () {
        this.fold = true
      },
      // 清空购物车列表
      empty () {
        this.selectFoods.forEach((food) => {
          food.count = 0
        })
      },
      // 支付方法
      pay () {
        if (this.totalPrice < this.minPrice) {
          return
        }
        window.alert(`支付${this.totalPrice}元`)
      },
      // 添加食物
      addFood (target) {
        // 添加食物时,执行小球飞入方法
        this.drop(target)
      },
      beforeDrop (el) {
        let count = this.balls.length
        while (count--) {
          let ball = this.balls[count]
          if (ball.show) {
            let rect = ball.el.getBoundingClientRect()
            let x = rect.left - 32
            let y = -(window.innerHeight - rect.top - 22)
            el.style.display = ''
            el.style.webkitTransform = `translate3d(0,${y}px,0)`
            el.style.transform = `translate3d(0,${y}px,0)`
            let inner = el.getElementsByClassName('inner-hook')[0]
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`
            inner.style.transform = `translate3d(${x}px,0,0)`
          }
        }
      },
      dropping (el, done) {
        /* eslint-disable no-unused-vars */
        let rf = el.offsetHeight
        this.$nextTick(() => {
          el.style.webkitTransform = 'translate3d(0,0,0)'
          el.style.transform = 'translate3d(0,0,0)'
          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.webkitTransform = 'translate3d(0,0,0)'
          inner.style.transform = 'translate3d(0,0,0)'
          el.addEventListener('transitionend', done)
        })
      },
      afterDrop (el) {
        let ball = this.dropBalls.shift()
        if (ball) {
          ball.show = false
          el.style.display = 'none'
        }
      }
    },
    components: {
      // 购物车添加,减少组件
      cartcontrol
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px
    .content
      display: flex
      background: #141d27
      font-size: 0
      color: rgba(255, 255, 255, 0.4)
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          vertical-align: top
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          border-radius: 50%
          background: #141d27
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            text-align: center
            background: #2b343c
            &.highlight
              background: rgb(0, 160, 220)
            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              color: #80858a
              &.highlight
                color: #fff
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            font-weight: 700
            color: #fff
            background: rgb(240, 20, 20)
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
        .price
          display: inline-block
          vertical-align: top
          margin-top: 12px
          line-height: 24px
          padding-right: 12px
          box-sizing: border-box
          border-right: 1px solid rgba(255, 255, 255, 0.1)
          font-size: 16px
          font-weight: 700
          &.highlight
            color: #fff
        .desc
          display: inline-block
          vertical-align: top
          margin: 12px 0 0 12px
          line-height: 24px
          font-size: 10px
      .content-right
        flex: 0 0 105px
        width: 105px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-size: 12px
          font-weight: 700
          &.not-enough
            background: #2b333b
          &.enough
            background: #00b43c
            color: #fff
    .ball-container
      .ball
        position: fixed
        left: 32px
        bottom: 22px
        z-index: 200
        transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
          width: 16px
          height: 16px
          border-radius: 50%
          background: rgb(0, 160, 220)
          transition: all 0.4s linear
    .shopcart-list
      position: absolute
      left: 0
      top: 0
      z-index: -1
      width: 100%
      transform: translate3d(0, -100%, 0)
      &.fold-enter-active, &.fold-leave-active
        transition: all 0.5s
      &.fold-enter, &.fold-leave-active
        transform: translate3d(0, 0, 0)
      .list-header
        height: 40px
        line-height: 40px
        padding: 0 18px
        background: #f3f5f7
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        .title
          float: left
          font-size: 14px
          color: rgb(7, 17, 27)
        .empty
          float: right
          font-size: 12px
          color: rgb(0, 160, 220)

      .list-content
        padding: 0 18px
        max-height: 217px
        overflow: hidden
        background: #fff
        .food
          position: relative
          padding: 12px 0
          box-sizing: border-box
          border-1px(rgba(7, 17, 27, 0.1))
          .name
            line-height: 24px
            font-size: 14px
            color: rgb(7, 17, 27)
          .price
            position: absolute
            right: 90px
            bottom: 12px
            line-height: 24px
            font-size: 14px
            font-weight: 700
            color: rgb(240, 20, 20)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 6px

  .list-mask
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 40
    backdrop-filter: blur(10px)
    opacity: 1
    background: rgba(7, 17, 27, 0.6)
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.5s
    &.fade-enter, &.fade-leave-active
      opacity: 0
      background: rgba(7, 17, 27, 0)
</style>