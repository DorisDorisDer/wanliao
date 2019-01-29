<template>
  <div class="tableqie">
	  	<ul>
	  		<li>
	  			<a href="#">腕表品牌</a>
	  		</li>
	  		<li>
	  			<a href="#">热门条件</a>
	  		</li>
	  		<li>
	  			<a href="#">珠宝品牌</a>
	  		</li>
	  		
	  	</ul>
	  	<div class="huan">
	  		<div class="box">
	  			
	  		</div>
	  		<div class="box">
	  			
	  		</div>
	  		<div class="box">
	  			
	  		</div>
	  	</div>
  	
  	
  	
  	
  </div>
</template>

<script>
export default {
  name: 'tableqie',
  data () {
    return {
      msg: 'tableqie'
    }
  },
  methods:{
  	add(n){
  		this.$emit("addevent",n)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.tableqie{
		width: 100%;
		background: white;
	}
	 ul{
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
		
	}
	a:hover{
		border-bottom: solid 2px rgb(73,44,31);
		padding: 10px 0;
		color: rgb(73,44,31);
		
	}
	
</style>


