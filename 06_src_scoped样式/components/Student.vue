<template>
  <div class="demo">
	<h2>Hi,{{ msg }}</h2>
	<h2 class="title">学生姓名：{{ name }}</h2>
	<h2 class="qwe">学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
	export default {
		name:'Student',
		data(){
			return {
				msg:'我是一个阳光帅气的小男孩儿。',
				name:'张三',
				sex:'male'
			}
		},
		
	}
</script>

<!-- lang属性：使用的语言默认为css，如果指定为less需要安装less-loader，less：css预处理语言 -->
<style scoped lang="less">
	.demo{
		background-color: orange;
		// 可以嵌套
		.qwe{
			font-size: 60px;
		}
	}
</style>