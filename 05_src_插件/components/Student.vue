<template>
  <div >
	<h2>Hi,{{ msg }}</h2>
	<h2>学生姓名：{{ name }}</h2>
	<h2>学生性别：{{ sex }}</h2>
	<input type="text" v-fbind:value="name">
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
