<template>
	<div>
		<Student name="李四" sex="女" :age='18'/>
		<hr/>
		<Student name="jack" sex="male" :age="33"/>
		<hr/>
		<Student name="marry" sex="female"/>
	</div>
</template>

<script>
	// 引入Student组件
	import Student from './components/Student.vue'

	export default {
		name:'App',
		components:{Student},
	}
</script>

<style>

</style>