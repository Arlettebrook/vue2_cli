<template>
	<div>
		<h1 v-text="msg" ref="title"></h1>
		<button @click="showDOM" ref="btn">点我输出上方的DOM元素</button>
		<School ref="sch"/>
		<!-- <School/>
		<School/> -->
	</div>
</template>

<script>
	// 引入School组件
	import School from './components/School.vue'

	export default {
		name:'App',
		data(){
			return {
				msg:'欢迎学习Vue!',
			}
		},
		components:{School},
		methods:{
			showDOM(){
				console.log(this.$refs.title) //获取真实DOM元素
				console.log(this.$refs)
				console.log(this.$refs.sch) //获取School组件的实例对象（vc)
			}
		}
	}
</script>

<style>

</style>