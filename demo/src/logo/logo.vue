<template>
  <div class="logo">
  	<ul class="logo_ul">
  		<li class="li1">
  			<a href="http://m.xbiao.com"></a>
  		</li>
  		<li class="li2">
  			<input type="text"  placeholder="搜索" />
  		</li>
  		<li class="li3">
  			<router-link to="/deng">登录</router-link>
  		</li>
  	</ul>
  	<ul class="zixun_ul">
  		<li>
  			<a href="#">咨询</a>
  		</li>
  		<li>
  			<router-link to="/luntan">论坛</router-link>
  		</li>
  		<li>
  			<a href="#">查腕表</a>
  		</li>
  		<li>
  			<a href="#">排行</a>
  		</li>
  		<li>
  			<a href="#">作业</a>
  		</li>
  		<li>
  			<a href="#">珠宝</a>
  		</li>
  		<li>
  			<a href="#">明星</a>
  		</li>
  		<li>
  			<a href="#">查珠宝</a>
  		</li>
  		<li>
  			<a href="#">表家号</a>
  		</li>
  		<li>
  			<a href="#">商铺</a>
  		</li>
  	</ul>
  	<tableqie></tableqie>
  	<lunbo></lunbo>
  	<xiao></xiao>
  	<router-view></router-view>
  </div>
</template>

<script>
import tableqie from '@/tableqie/tableqie'
import lunbo from '@/lunbo/lunbo'
import xiao from '@/xiao/xiao'
export default {
  name: 'logo',
  data () {
    return {
      msg: 'logo'
    }
  },
  components:{
  	tableqie,
  	lunbo,
  	xiao
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.logo{
		text-align: center;
	}
h1, h2 {
  font-weight: normal;
}
.logo_ul {
	width: 100%;
	display: flex;
  justify-content: space-around;
  background: rgb(73,44,31);
  padding: 0;
  margin: 0;
}
.logo_ul li {
  list-style: none;
  /*margin: 0 10px;*/
  padding: 7px 0px;
}
.li1{
	flex: 2;
}
.li2{
	flex: 4;
}
.li3{
	flex: 1;
}
input{
	border-radius: 7px;
	text-align: center;
	height: 24px;
	width: 95%;
	font-size: 16px;
	border: solid 1px rgb(73,44,31);
}

.zixun_ul a {
  color: black;
  list-style: 35px;
  text-decoration: none;
}
.logo_ul a {
  color: white;
  list-style: 35px;
  text-decoration: none;
}
.zixun_ul{
	width: 100%;
	display: flex;
	justify-content: space-around;
	padding: 0;
	margin: 0;
	flex-wrap: wrap;
	background: white;
}
.zixun_ul li{
	list-style: none;
	width: 20%;
	padding: 10px 0px;
}



</style>


