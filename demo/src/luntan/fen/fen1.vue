<template>
  <div class="fen1">
	  
  	
	  <div class="teble_qie">
	  	
  	<!--热门板块-->
	  	<div class="remen">
	  		<p class="remen_ban">热门板块</p>
	  		<p class="remen_gengdu">全部板块 <i>></i> </p>
	  	</div>
	  	<!--热门品牌-->
	  	<div class="remen_pin">
	  		<ul>
	  		<li><a href="#"><img src="../../img/Cartier.png"/><span>卡地亚</span></a></li>
	  		<li><a href="#"><img src="../../img/IWC.png"/><span>卡地亚</span></a></li>
	  		<li><a href="#"><img src="../../img/longines.png"/><span>卡地亚</span></a></li>
	  		<li><a href="#"><img src="../../img/MIDO.png"/><span>卡地亚</span></a></li>
	  		<li><a href="#"><img src="../../img/Omega.png"/><span>卡地亚</span></a></li>
	  	</ul>
	  	<ul>
	  		<li><a href="#"><img src="../../img/Rolex.png"/><span>卡地亚</span></a></li>
	  		<li><a href="#"><img src="../../img/Tiffany.png"/><span>卡地亚</span></a></li>
	  		<li><a href="#"><img src="../../img/TISSOT.png"/><span>卡地亚</span></a></li>
	  		<li><a href="#"><img src="../../img/vacheronconstantin.png"/><span>卡地亚</span></a></li>
	  		<li><a href="#"><img src="../../img/Cartier.png"/><span>卡地亚</span></a></li>
	  	</ul>
	  	</div>
	  	
	  	
	  </div>
	  <fen_1_1></fen_1_1>
	  
	  
	  
	  <router-view></router-view>
	  
	  
  </div>
</template>

<script>
	import fen_1_1 from '@/luntan/fen/fen_1/fen_1_1'
	
export default {
  name: 'luntan',
  data () {
    return {
      
    }
  },
  components:{
  	fen_1_1
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.lunbo{
		margin: 0;
		
	}
	.remen{
		height: 40px;
		width: 100%;
		border: solid 1px;
		display: flex;
		justify-content: space-between;
	}
	.remen_ban{
		/*float: left;*/
		padding-left:5% ;
		line-height: 15px;
		font-size: 15px;
		/*padding: 0 12px;*/
		color: #dcdcdc;
	}
	.remen_gengdu{
		/*float: right;*/
		padding-right:5% ;
		line-height: 15px;
		font-size: 15px;
		
	}
	
	/*热门品牌*/
	.remen_pin ul{
		/*width: 100%;*/
		padding: 0;
		display: flex;
		justify-content: space-around;
	}
	.remen_pin li{
		list-style: none;
		flex: 1;
		width: 15%;
	}
	.remen_pin img{
		width: 100%;
	}
	.remen_pin a{
		text-decoration: none;
		color: darkgray;
		font-size: 15px;
		
	}
	
	
</style>


