<template>
  <div class="xiao">
  	<div class="left_l">
  		
  	</div>
  	<div class="right_r">
  		<h4>欧米茄的名字，是怎么来的？</h4>
  		<p>大约在上周，听到欧米茄即将公布一枚机芯，和之...</p>
  	</div>
  
  
  </div>
</template>

<script>
	
export default {
  name: 'xiao',
  data () {
    return {
    	
    }
  },
  methods:{
  	
  },
  components:{
  	
	}  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.xiao{
		padding: 10px 0;
		display: flex;
		background: white;
	}
	.left_l{
		flex: 2;
	}
	.right_r{
		flex: 9;
		border: solid 1px;
	}
	h4{
		color: red;
		margin: 0;
		padding: 0;
		text-align: left;
	}
	p{
		text-align: left;
		font-size: 12px;
		margin: 0;
		padding: 0;
	}
</style>


