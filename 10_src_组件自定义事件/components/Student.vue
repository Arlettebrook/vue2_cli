<template>
  <div class="student">
	<h2>Hi,{{ msg }}</h2>
	<h2>学生姓名：{{ name }}</h2>
	<h2>学生性别：{{ sex }}</h2>
	<h2>当前number值为:{{ number }}</h2>
	<button @click="add">点我number++</button>
	<button @click="sendStudentName">把学生名给App</button>
	<button @click="unbind">解绑baidu事件</button>
	<button @click="death">销毁当前Student组件的实例(vc)</button>
  </div>
</template>

<script>
	export default {
		name:'Student',
		data(){
			return {
				msg:'我是一个阳光帅气的小男孩儿。',
				name:'张三',
				sex:'male',
				number:0,
			}
		},
		methods:{
			add(){
				console.log('add回调被调用了')
				this.number++
			},
			sendStudentName(){
				//触发Student组件实例对象vc身上的事件baidu
				this.$emit('baidu',this.name,555,666,888)
				// 触发demo事件
				// this.$emit('demo')
				// 触发自定义事件click，原因没有加native事件修饰符
				this.$emit('click')
			},
			unbind(){
				this.$off('baidu') // 解绑一个自定义组件事件
				// this.$off(['baidu','demo']) // 解绑多个自定义组件事件
				// this.$off() // 解绑所有自定义组件事件
			},
			death(){
				this.$destroy() // 销毁了当前Student组件的实例,销毁后所有Student实例的自定义事件全部不奏效
			}
		}
		
	}
</script>

<!-- lang属性：使用的语言默认为css，如果指定为less需要安装less-loader，less：css预处理语言 -->
<style scoped lang="less">
	.student{
		background-color: orange;
		// // 可以嵌套
		// .qwe{
		// 	font-size: 60px;
		
		padding:5px;
		margin-top:30px;
		}
</style>