<template>
	<div>
		<h1 class="title">App,你好啊！</h1>
		<School/><hr/>
		<Student/>
	</div>
</template>

<script>
	// 引入Student组件
	import School from './components/School.vue'
	import Student from './components/Student.vue'
	

	export default {
		name:'App',
		components:{Student,School},
	}
</script>

<!-- App.vue里面一般不要写scoped：最终的样式会被汇总到一起，重名的样式，不写会被覆盖 -->
<style>
	.title{
		color:red;
	}
</style>