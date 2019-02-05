<template>
  <div>
    <div class="goods">
      <!--左侧菜单-->
      <!--ref:better-scroll这个滚动插件中的一个属性,用于通过better-scroll中这个方法$refs获取我们需要操作的元素(对象)-->
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <!--
            :class="{'current':currentIndex===index}"
            绑定样式,current,是class名,currentIndex是通过计算属性(通过beter-scroll计算的高度)返回当前左侧菜单项的序号,
            返回序号与数据序号匹配时(为true),添加current,添加左侧菜单选中状态

            @click="selectMenu(index)"
            点击事件,index:是当前li在goods中的序号
            下面根据我们传递的index进行数据操作(操作过程见下面selectMenu方法介绍.
          -->
          <li v-for="(item,index) in goods" :key="index" class="menu-item" :class="{'current':currentIndex===index}"
              @click="selectMenu(index)">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
          </li>
        </ul>
      </div>
      <!--右侧食品列表-->
      <!--ref:better-scroll这个滚动插件中的一个属性,用于通过better-scroll中这个方法$refs获取我们需要操作的元素(对象)-->
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="(item,index) in goods" :key="index" class="food-list" ref="foodList">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <!--
                @click="selectFood(food)"
                点击事件,food来自v-for="(food,index) in items.foods",即每一个(不是类,是单个)食品
                方法介绍,见下方selectFood(food)方法介绍:点击了哪个食品(单个),弹出该食品的详情页面.形参:food,是点击的该食品
              -->
              <li v-for="(food,index) in item.foods" :key="index" @click="selectFood(food)" class="food-item border-1px">
                <div class="icon">
                  <img width="60" height="30" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                  </div>
                  <!--
                    v-show: 若存在food.oldPrice(原价),则显示
                  -->
                  <div class="price">
                    <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <!--
                    @add="addFood" :food="food"
                    向组件cartcontrol(即购物车加,减)添加自定义事件add,方法名为addFood;注意此处,要开始子组件向父组件传值了
                    传递属性food(属性值为food,food来自v-for="(food,index) in items.foods",
                    即每一个(不是类,是单个)食品)
                  -->
                  <div class="cartcontrol-wrapper">
                    <!--添加,减少组件-->
                    <cartcontrol @add="addFood" :food="food"></cartcontrol>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!--
        ref:better-scroll这个滚动插件中的一个属性,用于通过better-scroll中这个方法$refs获取我们需要操作的元素(对象)
        :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"
        向组件shopcart购物车传值deliveryPrice(配送费)
        selectFoods:购物车中选中的食品(是个对象),其中属性count表示数量
        minPrice:最低起送费
      -->
      <shopcart ref="shopcart" :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice"
                :minPrice="seller.minPrice"></shopcart>
    </div>
    <!--
      @add="addFood" :food="selectedFood" ref="food"
      向组件food添加自定义事件add,方法名为addFood;
      自定义属性food(food的值为:selectedFood,选中的每个食品(对象,对象上count,用来计算数量))
      ref:better-scroll这个滚动插件中的一个属性,
      用于通过better-scroll中这个方法$refs获取我们需要操作的元素(对象)
    -->
    <food @add="addFood" :food="selectedFood" ref="food"></food>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Axios from 'axios'
  // 引入better-scroll这个插件
  import BScroll from 'better-scroll'
  // 引入组件shopcart
  import shopcart from '../shopcart/shopcart'
  // 引入组件cartcontrol
  import cartcontrol from '../cartcontrol/cartcontrol'
  // 引入组件food
  import food from '../food/food'
  // 将axios这个对象添加到Vue的$http这个属性上,就可以在vue中通过axios请求数据
  Vue.prototype.$http = Axios
  let url = 'http://localhost:83/static/data.json'
  export default {
    props: {
      // 接收从App.vue 这个组件传过来的seller这个值
      seller: {
        type: Object
      }
    },
    data () {
      return {
        // 定义goods用于存放从data.json文件获取的goods
        goods: [],
        // 定义listHeight用于存放食品右侧食品列表中每一类(注意是类)食品
        // 后面根据此处存放的高度,用于滚动右侧食品,再得到左侧相应菜单的序号,从而给相应菜单添加选中状态(添加class:current)
        // 也可以根据左侧菜单序号,从而得到相应高度,让右侧食品列表滚动到相应位置
        listHeight: [],
        // 定义scrollY用于存放从用于存放右侧食品滚动的高度,默认值为0
        scrollY: 0,
        // 定义selectedFood用于记录被点击的那个食品(也可以说要弹出该食品,详情的那个食品)
        selectedFood: {}
      }
    },
    computed: {
      // 根据右侧食品列表菜单高度,返回这个高度,在数组中对应的序号,也就是左侧菜单的序号,用于在上面给相应菜单添加选中样式
      currentIndex () {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i]
          let height2 = this.listHeight[i + 1]
          // this:VueComponent
          console.log('goods页面,this:', this)
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i
          }
        }
        return 0
      },
      // 购物车中选中的食品(是个对象),其中属性count表示数量
      selectFoods () {
        let foods = []
        // this.goods:从data.json.获取到goods
        this.goods.forEach((good) => {
          // good:从this.goods拿到的食品分类
          // console.log('good:', good)
          good.foods.forEach((food) => {
            // 每类食品中的每一个食品(是个对象)
            // console.log('food:', food)
            if (food.count) {
              foods.push(food)
            }
          })
        })
        console.log('1foods:', foods)
        // 返回选中的食品
        return foods
      }
    },
    created () {
      // 在创建实例时,向实例添加classMap(数组)这个属性,其中值对应不同的背景图片
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      // 改变this指向
      let self = this
      // 通过axios获取数据,将data.json,中的goods,赋给实例中的goods
      Axios.get(url).then(function (res) {
        self.goods = res.data.goods
        // Vue.nextTick在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
        self.$nextTick(() => {
          // 执行_initScroll:初始化better-scroll要操作的元素(对象),初始化foodsScroll方法(该方法用于滚动右侧菜单)
          // 执行_calculateHeight:获取右侧菜单中每一类食品的高度,存放所有高度放到listHeight中
          self._initScroll()
          self._calculateHeight()
        })
      })
    },
    methods: {
      // 点击左侧菜单项的序号(index是从上面点击事件中传递过来的,左侧菜单的序号)
      selectMenu (index) {
        // 通过better-scroll的$refs这个方法获取到右侧食品列表中每一类食品(元素),是个数组,长度和左侧菜单长度一致,也可以一一对应
        let foodList = this.$refs.foodList
        console.log('foodList:', foodList)
        // 根据foodList和index(左侧序号),得到,右侧食品列表中对应的那个食品(元素)
        let el = foodList[index]
        // console.log('el:', el)
        // 使用better-scroll中方法将el,滚动到到顶部,300是滚动效果需要的时间
        this.foodsScroll.scrollToElement(el, 300)
      },
      // 点击(后)会弹出(该商品的详情)的食品(即弹出商品详情的那个食品),food就是被点击的那个商品
      selectFood (food) {
        this.selectedFood = food
        this.$refs.food.show()
      },
      // 添加食品
      addFood (target) {
        this._drop(target)
      },
      // 小球飞入购物车的效果
      _drop (target) {
        // console.log(target)
        // 体验优化,异步执行下落动画
        this.$nextTick(() => {
          this.$refs.shopcart.drop(target)
        })
      },
      // 初始化better-scroll,找到要滚动的元素
      _initScroll () {
        this.meunScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        })

        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true,
          probeType: 3
        })

        // 滚动方法
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        })
      },
      // 获取右侧食品每一类食品的高度,并方法数组listHeight
      _calculateHeight () {
        let foodList = this.$refs.foodList
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      }
    },
    // 注册组件购物车shopcart,加,减cartcontrol,food食品详情
    components: {
      shopcart,
      cartcontrol,
      food
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>