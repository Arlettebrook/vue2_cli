<template>
	<div>
		<div class="row">
			<About>
				<h3>测试组件内守卫,只有通过路由规则且进入时才调用beforeRouteEnter</h3>
			</About>
			<Banner/>
		</div>
		<div class="row">
		<div class="col-xs-2 col-xs-offset-2">
			<div class="list-group">
				<!-- 原始HTML中我们使用a标签实现页面跳转 -->
			<!-- <a class="list-group-item active" href="./about.html">About</a>
			<a class="list-group-item" href="./home.html">Home</a> -->

			<!-- vue中借助router-link标签实现路由的切换 -->
			<!-- 一级路由一般不这样写  -->
			<!-- <router-link class="list-group-item" active-class="active" :to="{name:'guanyu'}">About</router-link> -->
			<!-- replace属性写法=》 :replace="true" 简写=》 replace
				加上这个属性之后就不会保留历史记录（会覆盖上一次历史记录）
				默认是push追加模式 ，replace会覆盖
			-->
			<router-link replace class="list-group-item" active-class="active" to="/about">About</router-link>
			<router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
			</div>
		</div>
		<div class="col-xs-6">
			<div class="panel">
			<div class="panel-body">
				<!-- 此处到底展示什么组件，得看用户点击的是那个导航项 -->
				<!-- 指定路由组件的呈现的位置 -->
				<router-view></router-view>
			</div>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
	import Banner from './components/Banner'
	import About from './pages/About'

	export default {
		name:'App',
		components:{Banner,About},
		
	}
</script>

<style>

</style>