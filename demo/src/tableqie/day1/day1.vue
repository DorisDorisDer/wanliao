<template>
  <div class="day1">
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
</template>

<script>
export default {
  name: 'day1',
  data () {
    return {
      msg: 'day1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.day1{
		width: 90%;
		background: white;
		margin: 0 auto;
		margin-top: -10px;
	}
	 ul{
		/*width: 100%;*/
		padding: 0;
		display: flex;
		justify-content: space-around;
	}
	li{
		list-style: none;
		flex: 1;
		width: 15%;
	}
	img{
		width: 100%;
	}
	a{
		text-decoration: none;
		color: darkgray;
		font-size: 15px;
		
	}
	
</style>


