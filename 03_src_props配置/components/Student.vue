<template>
  <div >
	<h2>Hi,{{ msg }}</h2>
	<h2>学生姓名：{{ name }}</h2>
	<h2>学生性别：{{ sex }}</h2>
	<h2>学生年龄：{{ myAge+1 }}</h2>
	<button @click="updateAge" >尝试修改收到的年龄(props接收的属性值能修改,但是控制台报错，要避免修改)</button>
	<button @click="updateAgeTrue">正确修改年龄+1</button>
  </div>
</template>

<script>
	export default {
		name:'Student',
		data(){
			return {
				msg:'我是一个阳光帅气的小男孩儿。',
				myAge:this.age
			}
		},
		// 与顺序无关,与data相比，会被优先放在vm身上
		// props:['name','sex','age'] //简单接收组件标签的属性值

		//接收的同时对数据进行类型限制
		// props:{
		// 	name:String,
		// 	age:Number,
		// 	sex:String,
		// }

		//接收的同时对数据进行类型限制+默认值的限定+必要性的限定
		props:{
			name:{
				type:String, //name的类型是字符串
				required:true, //name是必要的
			},
			sex:{
				type:String,
				required:true,
			},
			age:{
				type:Number,
				default:88  //不是必须的，使用默认值
			}

		},
		methods:{
			updateAge(){
				console.log('props接收的属性值可以通过vc直接访问',this.name)
				console.log('@',this)
				this.age = 22
			},
			updateAgeTrue(){
				this.myAge++
			}
		}
	}
</script>
