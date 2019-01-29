<template>
  <div class="fen_1_1">
	  <div>
	  	<!--推荐-->
	  	<div class="tuijian">
	  		<div class="zhuti">
	  			推荐你们一个便携带
	  		</div>
	  		<!--推荐内容-->
	  		<div class="nei">
	  			<div class="tu1">
	  				
	  			</div>
	  			<div class="nei_1">
	  				<span class="usename">ZaZaZaZa</span>
	  				<span class="time">2019-01-29 01:31</span>
	  				<span class="brand">劳力士</span>
	  				<span class="reply">16</span>
	  			</div>
	  		</div>
	  	</div>
	  	
	  	
	  	
	  	
	  </div>
  	
	  
	  
  </div>
</template>

<script>
export default {
  name: 'luntan',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.fen_1_1{
		margin: 0;
		border-bottom: solid 1px;
		width: 100%;
		padding: 0 3% ;
		/*margin-bottom: -5px;*/
	}
	.tuijian{
		width: 100%;
		
	}
	.zhuti{
		width: 100%;
	}
	
	.nei{
		margin: 0;
		width: 100%;
		padding: 5px;
		display: flex;
	}
	.nei_1{
		width: 90%;
		position: relative;
	}
	.usename{
		font-size: 13px;
	}
	.time,
	.brand{
		font-size: 12px;
		color: darkgray;
		padding-left:5px ;
	}
	.brand{
	}
	
	.reply{
		position: absolute;
		right: -15px;	
		top: 0;	
		font-size:12px;
		color: darkgray;
		top: 5px;
	}
	
</style>


