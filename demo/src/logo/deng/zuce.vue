<template>
  <div class="zuce">
  	<!--头部-->
  	<div class="zu_ce">
  		<div class="fanhui">
  			<a href="">嗯</a>
  		</div>
  		<span class="kuai">快速注册</span>
  		<div class="fanzhuan">
  			<router-link to="/deng">登录</router-link>
  		</div>
  	</div>
  	
  	<!--手机号-->
  	<div class="warrp">
  		<form id="rei" method="post">
  			<article class="artic_1">
  				
  				<!--输入手机号-->
  				<article class="rei_item">
  					<div class="rib">
  						<div class="rib_1">
  							<i></i>
  						</div>
  						<div class="rib_2">
  							<input type="text" placeholder="请输入手机号" />
  						</div>
  					</div>
  					<div class="ris">
  						
  					</div>
  					<span class="not">腕表之家承诺保护你的隐私</span>
  				</article>
  				
  				
  				<!--输入验证码-->
  				<article class="rei_item1">
  					<div class="qiexi">
  						<div class="yanzheng">
	  						<input type="text" placeholder="请输入验证码" />
	  					</div>
	  					<div class="sui_tu">
	  						<img src=""/>
	  					</div>
  					</div>
  				</article>
  				
  				
  				<article class="rei_item2">
  					<div class="dian">
  						<button type="button" class="huoqu">获取短信验证码</button>
  					</div>
  					<div class="tongyi">
  						<p>同意并接受 <a href="">《网站服务协议》</a> </p>
  					</div>
  					
  					
  				</article>
  			</article>
  			
  		</form>
  		
  	</div>
  	
  	
  	
  </div>
</template>

<script>
export default {
  name: 'zuce',
  data () {
    return {
      
    }
  },
  components:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	a{
		text-decoration: none;
	}
	
	.zuce{
		background: white;
	}
	.fanhui{
		flex: 1;
	}
	.zu_ce{
		background: black;
		display: flex;
		justify-content: space-between;
		height: 35px;
	}
	.kuai{
		text-align: center;
		/*transform:translateX(50%) ;*/
		flex: 5;
		font-size: 18px;
		line-height: 35px;
		color: white;
	}
	.fazhuan{
		flex: 1;
	}
	.zu_ce a{
		color: white;
		font-size: 18px;
		flex: 1;
		line-height: 35px;
		margin-right: 5px;
	}
	
	/*手机号*/
	.warrp{
		width: 100%;
		
	}
	.rei_item{
		width: 100%;
	}
	.rib{
		width: 90%;
		margin: 0 auto;
		border: solid 1px darkgray;
		padding: 2px;
		display: flex;
		margin-top: 15px;
	}
	.rib_1{
		width: 15%;
		border-right: solid 1px darkgray;
	}
	.rib_2{
		width: 83%;
	}
	.rib_2 input{
		width: 100%;
		outline: none;
		border: none;
		height: 30px;
		padding: 2px;
		font-size: 20px;
		padding: 3px;
	}
	.not{
		color: darkgray;
		font-size: 12px;
		margin-left: 5%;
	}
	.rei_item1{
		margin-top: 15px;
		display: flex;
		width: 100%;

	}
	
	.qiexi{
		width: 90%;
		margin-top: 15px;
		margin: 0 auto;
		
	}
	
	.yanzheng input{
		padding: 3px;
		height: 35px;
		border: solid 1px darkgray;
		width: 50%;
	}
	.dian{
		width: 90%;
		margin: 0 auto;
	}
	.dian button{
		height: 36px;
		width: 100%;
		background: #74381e;
		border: solid 1px #74381e;
		border-radius: 5px;
		color: white;
		font-size: 20px;
	}
	.tongyi{
		margin-left: 5%;
		font-size: 12px;
	}
	
</style>


