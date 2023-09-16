<template>
  <div >
	<h2>Hi,{{ msg }}</h2>
	<!-- 全局过滤器的方法 -->
	<h2>Hi,{{ msg | mySlice}}</h2>
	<h2>学校名称：{{ name }}</h2>
	<h2>学校地址：{{ address }}</h2>
	<button @click="test">点我测试一下hello方法</button>
	<!-- 直接会被调用因为：点击事件后面是方法会调方法，属性会调属性 -->
	<button @click="hello">点我测试一下hello2方法</button>
  </div>
</template>

<script>
	export default {
		name:'School',
		data(){
			return {
				msg:'欢迎来到Vue cli的学习!',
				name:'Vue.js-cli',
				address:'北京'
			}
		},
		methods:{
			test(){
				console.log(this,this.hello)
				// 写成方法才会被调用
				this.hello()
			}
		}
		
	}
</script>
