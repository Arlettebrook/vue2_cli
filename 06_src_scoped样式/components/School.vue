<template>
  <div class="demo">
	<h2>Hi,{{ msg }}</h2>
	<h2 class="title">学校名称：{{ name }}</h2>
	<h2>学校地址：{{ address }}</h2>
	
  </div>
</template>

<script>
	export default {
		name:'School',
		data(){
			return {
				msg:'欢迎来到Vue cli的学习!',
				name:'Vue.js-cli',
				address:'北京'
			}
		},
		
		
	}
</script>

<style scoped>
	.demo{
		background-color: skyblue;
	}
</style>