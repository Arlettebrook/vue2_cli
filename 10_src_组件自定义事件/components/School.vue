<template>
  <div class="school">
	<h2>Hi,{{ msg }}</h2>
	<h2 class="title">学校名称：{{ name }}</h2>
	<h2>学校地址：{{ address }}</h2>
	<button @click="sendSchoolName">把学校名给App</button>
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
		props:['getSchoolName'],
		methods:{
			sendSchoolName(){
				this.getSchoolName(this.name)
			}
		}
		
		
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding:5px;
	}
</style>