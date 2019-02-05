<template>
<!--购物车添加,删除-->
  <div class="cartcontrol">
    <!--购物车删除过渡效果-->
    <transition name="move">
      <!--
        删除
        v-show="food.count>0" @click.stop.prevent="decreaseCart"
        根据该类食品的数量,隐藏显示删除,
        decreaseCart,用于减少该食品数量(每次减一)
        点击事件,阻止单击事件冒泡,阻止事件默认行为,否则会触发食品详情页
        -->
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
        <span class="inner icon-remove_circle_outline">-</span>
      </div>
    </transition>
    <!--
      v-show="food.count>0",根据该类商品数量,判断是否显示,食品数量
      {{food.count}} 该类食品数量
    -->
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
     <!--
        增加
        @click.stop.prevent="addCart"
        addCart,用于增加该食品数量(每次加一)
        点击事件,阻止单击事件冒泡,阻止事件默认行为,否则会触发食品详情页
        -->
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart">+</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  export default {
    props: {
      // 接收从父组件goods,shopcart,food三个父组件传过来的food,单个食品,此时food.count,即是该食品的数量.
      food: {
        type: Object
      }
    },
    methods: {
      // 添加商品,每次加一
      addCart () {
        if (!this.food.count) {
          // food.count不存在时,即没有购买过时,将该类食品的数量设置为1
          Vue.set(this.food, 'count', 1)
        } else {
          // 将数量加1
          this.food.count++
        }
        // 子组件,触发父组件方法add
        this.$emit('add', event.target)
      },
      // 删除商品数量,每次减一
      decreaseCart () {
        if (this.food.count) {
          this.food.count--
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      opacity: 1
      transform: translate3d(0, 0, 0)
      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
        transition: all 0.4s linear
        transform: rotate(0)
      &.move-enter-active, &.move-leave-active
        transition: all 0.4s linear
      &.move-enter, &.move-leave-active
        opacity: 0
        transform: translate3d(24px, 0, 0)
        .inner
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
</style>