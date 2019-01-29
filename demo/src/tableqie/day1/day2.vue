<template>
  <div class="day2">
				  	<ul>
				  		<li>
				  			<a href="#">我也不知道</a>
				  		</li>
				  	</ul>
  </div>
</template>

<script>
export default {
  name: 'day2',
  data () {
    return {
    }
  },
  methods:{
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


