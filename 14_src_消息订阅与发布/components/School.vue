<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
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
			// this.$bus.$on('hello',(data) => {
			// 	console.log('我是school组件,收到了数据:',data)
			// })

			// pubsub-js
			// 第三方库的普通函数this没有定义，用箭头函数就是vc
			this.pubId = pubsub.subscribe('hello',(messageName,data) => {
				console.log(this)
				console.log('有人发布了hello消息,hello消息的回调执行了',messageName,data)
			})
		},
		beforedestroy(){
		// 	this.$bus.off('hello')

		// 订阅了消息，取消订阅消息,只能通过id取消
		pubsub.unsubscribe(this.pubId)
		}
		
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>