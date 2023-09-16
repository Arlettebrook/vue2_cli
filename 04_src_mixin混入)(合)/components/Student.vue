<template>
  <div >
	<h2>Hi,{{ msg }}</h2>
	<h2 @click="showName">学生姓名：{{ name }}</h2>
	<h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
	//引入一个混合-局部混合
	// 如果混合中的属性如data，methods与自生的冲突，以自身的为主，当生命周期的函数都要
	import {hunhe,hunhe2} from '../mixin'
	export default {
		name:'Student',
		data(){
			return {
				msg:'我是一个阳光帅气的小男孩儿。',
				name:'张三',
				sex:'male'
			}
		},
		mixins:[hunhe,hunhe2],
		methods:{
			showName(){
				console.log('自身的methods,这里没有弹窗')
			}
		},
		mounted(){
			console.log('自身的mounted')
		}
	}
</script>
