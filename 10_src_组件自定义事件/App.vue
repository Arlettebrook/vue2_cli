<template>
	<div class="app">
		<h1 class="title">App,{{ msg }},学生姓名是：{{ studentName }}</h1>
		<!-- 通过父组件给子组件传递函数类型的props实现：子组件给父组件传递数据 -->
		<School :getSchoolName="getSchoolName"/><hr/>

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子组件给父组件传递数据（第一种写法：v-on、@） -->
		<!-- <Student v-on:baidu="getStudentName"/> -->
		<!-- 简写并只执行一次该事件 -->
		<Student @baidu.once="getStudentName" @demo="m1"/>

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子组件给父组件传递数据（第二种写法：ref） -->
		<!-- ref属性：注册引用信息，html上是真实DOM元素，组件标签上是vc实例 -->
		<!-- 另外一种写法 -->
		<!-- 原生事件要加native修饰符，要不然，会被当成自定义事件 -->
		<Student ref="student" @demo="m1" @click.native="show"/>
	</div>
</template>

<script>
	// 引入Student组件
	import School from './components/School.vue'
	import Student from './components/Student.vue'
	

	export default {
		name:'App',
		components:{Student,School},
		data(){
			return {
				msg:'你好啊！',
				studentName:''
			}
		},
		methods:{
			getSchoolName(name){
				console.log('App收到了学校名:',name)
			},
			// 该函数有两个参数，第一个name，第二个是一个数组，传参的时候可以分开写
			getStudentName(name,...params){
				console.log('App收到了学生名:',name,params)
				this.studentName = name
			},
			m1(){
				console.log('demo事件被触发了')
			},
			show(){
				alert(123)
			}
		},
		// 组件自定义事件的另外一种写法:
		// 这种写法可以进行一些其他的操作
		mounted(){
			// setTimeout(() => {
			// 	this.$refs.student.$on('baidu',this.getStudentName)
			// },3000 )
			// $on绑定事件，this是App
			// this.$refs.student.$on('baidu',this.getStudentName)
			// $once绑定一次性事件
			// this.$refs.student.$once('baidu',this.getStudentName)

			// 没有走methods里面的方法
			// 这种写法的this是：谁触发事件this就指向谁，这里是Student组件触发，不是App
			// this.$refs.student.$on('baidu',function(name,...params){
			// 	console.log('App收到了学生名:',name,params)
			// 	console.log(this)
			//  this.studentName = name   //修改不起作用
			// })
			// 箭头函数就正常
			this.$refs.student.$on('baidu',(name,...params) => {
				console.log('App收到了学生名:',name,params)
				this.studentName = name

			})
			
		}
	}
</script>

<!-- App.vue里面一般不要写scoped：最终的样式会被汇总到一起，重名的样式，不写会被覆盖 -->
<style>
	.title{
		color:red;
	}

	.app{
		background-color: gray;
		padding: 5px;
	}
</style>