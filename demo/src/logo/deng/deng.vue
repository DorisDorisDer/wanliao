<template>
  <div class="deng">
  	<div class="header_container">
  		<span><</span>
  		<span>登录</span>
  		<div class="reg_log">
  			<router-link to="/zuce">注册</router-link>
  		</div>
  	</div>
  	<div class="zhu">
  	
  		<div class="shouji">
  			<div class="shouji_tu">
  				<i></i>
  			</div>
  			<div class="shouji_hao">
  				<input type="text" placeholder="手机号/邮箱/用户名" />
  			</div>
  		</div>
  		<div class="yanzheng">
  				
  		</div>
  		
  		
  		<div class="mima">
  			<div class="mima_tu">
  				<i></i>
  			</div>
  			<div class="mima_mi">
  				<input type="text"   placeholder="密码" />
  			</div>
  		</div>
  		
  		
  		<div class="dianji_dian">
  			<button type="button" class="diandeng">登录</button>
  			<a class="wangji">忘记密码?</a>
  			
  			
  		</div>
  		
  		
  		<div class="fenge">
  			<p>
  				<mark>用以下第三方方式登录</mark>
  			</p>
  		</div>
  		<div class="sanfang">
  			<div class="tx">
  				<i></i>
  				<span class="la">腾讯QQ</span>
  			</div>
  			<div class="xl">
  				<i></i>
  				<span class="la">新浪微博</span>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'deng',
  data () {
    return {
      msg: 'deng'
    }
  },
  components:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.deng{
		background: white;
	}
.header_container{
		display: flex;
		background: black;
		height: 35px;
		text-align: center;
		display: flex;
		justify-content: space-between;
		
}
span{
	font-size: 20px;
	margin-left: 10px;
	color: white;
}
a{
	color: white;
	font-size: 18px;
	padding: 2px;
	text-decoration: none;
}
.zhu{
	text-align: center;
}
.shouji,
.mima{
	width: 90%;
	margin: 0 auto;
	border: solid 1px darkgray;
	/*padding: 1px;*/
	display: flex;
	/*margin: 10px;*/
}
.shouji{
	margin-bottom:25px ;
	margin-top:15px ;
}

.shouji_tu,
.mima_tu{
	width: 15%;
	border-right: solid 1px darkgray;
	
}
i{
	width: 100%;
}
.shouji_hao,
.mima_mi{
	width: 83%;
}

input{
	width: 100%;
	height: 35px;
	padding: 2px;
	border:none;
	-webkit-appearance: none;
	outline: none;
	font-size: 18px;
}
.dianji_dian{
	margin-top: 40px;
}




.diandeng{
	display: block;
	margin: 0 auto;
	width: 90%;
	height: 40px;
	background: #74381e;
	color: white;
	font-size: 18px;
	border: solid 1px saddlebrown;
	border-radius: 5px;
}

.wangji{
	color: saddlebrown;
	float: right;
	margin-right: 5%;
	font-size: 15px;
}

.fenge{
	margin-top: 50px;
}
mark{
	background:darkgray ;
}
.sanfang{
	margin-top: 20px;
	display: flex;
	justify-content: center;
}

.la{
	color: darkgrey;
	
	font-size:13px ;
}
</style>


