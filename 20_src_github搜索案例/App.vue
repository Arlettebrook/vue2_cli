<template>
	<div class="container">
		<Search/>
		<List/>
	</div>
</template>

<script>
	// 这里引入样式会进行语法检查，不存在的资源会报错，在public中引入第三方css样式，可解决
	// import './assets/css/bootstrap.css'
	import Search from './components/Search'
	import List from './components/List'

	export default {
		name:'App',
		components:{Search,List}
		
	}
</script>

<style>
	

</style>