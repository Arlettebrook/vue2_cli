<template>
  <div >
	<h2>Hi,{{ msg }}</h2>
	<h2 @click="showName">学校名称：{{ name }}</h2>
	<h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
	//引入一个混合
	import {hunhe,hunhe2} from '../mixin'
	export default {
		name:'School',
		data(){
			return {
				msg:'欢迎来到Vue cli的学习!',
				name:'Vue.js-cli',
				address:'北京'
			}
		},
		mixins:[hunhe,hunhe2]
	}
</script>
