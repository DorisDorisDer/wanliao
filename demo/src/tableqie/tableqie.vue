<template>
  <div class="tableqie">
	  	<ul class="dianji">
	  		<li>
	  			<a href="#" @click="tabCl(day1)">腕表品牌</a>
	  		</li>
	  		<li>
	  			<a href="#" @click="tabCl(day2)">腕表品牌</a>
	  		</li>
	  		<li>
	  			<a href="#" @click="tabCl(day3)">珠宝品牌</a>
	  		</li>
	  		
	  	</ul>
	  	<div :is="laji">
	  		
	  	</div>
  </div>
</template>

<script>
	import day1 from '@/tableqie/day1/day1'
	import day2 from '@/tableqie/day1/day2'
	import day3 from '@/tableqie/day1/day3'
	
export default {
  name: 'tableqie',
  data () {
    return {
      day1:'day1',
      day2:'day2',
      day3:'day3',
      laji:'day1'
    }
  },
  methods:{
  	tabCl(tablen){
  		this.laji = tablen
  	}
  },
  components:{
  	day1,
  	day2,
  	day3
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
	.hid{
		display: none;
	}
</style>


