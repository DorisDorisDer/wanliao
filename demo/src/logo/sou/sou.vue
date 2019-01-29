<template>
  <div class="logo">
  	
  	
  </div>
</template>

<script>

export default {
  name: 'logo',
  data () {
    return {
      msg: 'logo'
    }
  },
  components:{
  	tableqie,
  	lunbo,
  	xiao
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
	flex: 2;
}
.li2{
	flex: 4;
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



</style>


