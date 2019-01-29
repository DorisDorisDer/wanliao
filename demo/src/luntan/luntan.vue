<template>
  <div class="luntan">
	  <ul class="logo_ul">
  		<li class="li1">
  			<a href=""></a>
  		</li>
  		<li class="li2">
  			<input type="text"  placeholder="搜索" />
  		</li>
  		<li class="li3">
  			<router-link to="/deng">登录</router-link>
  		</li>
  	</ul>
  	
  	
	  <div class="teble_qie">
	  	
	  	<ul class="dianji">
	  		<li>
	  			<a href="#" @click="tabCl(fen1)">新帖</a>
	  		</li>
	  		<li>
	  			<a href="#" @click="tabCl(day2)">板块</a>
	  		</li>
	  		<li>
	  			<a href="#" @click="tabCl(day3)">作业</a>
	  		</li>
	  		<li>
	  			<a href="#" @click="tabCl(day3)">问答</a>
	  		</li>
	  		
	  	</ul>
	  	<div :is="laji">
	  		
	  	</div>
	  	
	  	
	  </div>
  </div>
</template>

<script>
	import fen1 from '@/luntan/fen/fen1'
	import day2 from '@/tableqie/day1/day2'
	import day3 from '@/tableqie/day1/day3'
	
	
	
export default {
  name: 'luntan',
  data () {
    return {
      fen1:'fen1',
      day2:'day2',
      day3:'day3',
      laji:'fen1'
    }
  },
  methods:{
  	tabCl(tablen){
  		this.laji = tablen
  	}
  },
  components:{
  	fen1,
  	day2,
  	day3
	}  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.luntan{
		background: white;
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
	flex: 3;
}
.li2{
	flex: 3;
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
/*table切换*/




.tableqie{
		width: 100%;
		background: white;
	}
	 ul{
	 	margin: 0;
		width: 100%;
		display: flex;
		justify-content: space-around;
		border-bottom: solid 1px darkgray;
		padding: 10px 0;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
		color: darkgray;
		font-size: 15px;
		padding: 2px;
		
	}
	a:hover{
		border-bottom: solid 2px rgb(73,44,31);
		padding: 10px 0;
		color: rgb(73,44,31);
		
	}
	.hid{
		display: none;
	}


</style>


