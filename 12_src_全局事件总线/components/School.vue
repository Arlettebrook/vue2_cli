<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'Vue.js-vue_cli',
				address:'北京',
			}
		},
		mounted(){
			// 借助x绑定事件：x就是$bus:在vm创建之前原型上增添一个x，就是vm，有$on,$off,$once
			this.$bus.$on('hello',(data) => {
				console.log('我是school组件,收到了数据:',data)
			})
		},
		beforedestroy(){
			this.$bus.off('hello')
		}
		
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>