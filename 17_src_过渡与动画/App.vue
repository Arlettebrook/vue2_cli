<template>
	<div>
		<MyTest/>
		<hr/>
		<MyTest2/>
		<hr/>
		<MyTest3/>
		<hr/>
		<MyTest4/>
	</div>
</template>

<script>
	import MyTest from "./components/MyTest"
	import MyTest2 from "./components/MyTest2"
	import MyTest3 from "./components/MyTest3"
	import MyTest4 from "./components/MyTest4"
	
	export default {
		name:'App',
		components:{MyTest,MyTest2,MyTest3,MyTest4},
		
	}
</script>

<!-- App.vue里面一般不要写scoped：最终的样式会被汇总到一起，重名的样式，不写会被覆盖 -->
<style scoped>

</style>