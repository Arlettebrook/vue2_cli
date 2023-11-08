<template>
    <li>
        <label>
			<!-- 这里可以是点击事件或者改变事件 -->
			<!-- 这里的修改值是props传过来的，不建议修改，因此不要使用双向数据绑定v-model
				修改控制台没有警告的原因：vue只对修改props进行了浅层次的监视，
				意思就是：只做了对象的监视，里面的值没有做监视，改了也不会发出警告
				obj a ={b:100,d:300}   a.b=3   a={z:22,y:33}
			-->
			<!-- <input type="checkbox" v-model="todo.done"> -->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
			<input 
				type="text" 
				v-show="todo.isEdit" 
				:value="todo.title"
				@blur="handelBlur(todo,$event)"
				ref="inputTitle"
			/>
        </label>
        <button class="btn btn-danger" @click="handelDelete(todo.id)">删除</button>
		<button class="btn btn-edit" v-show="!todo.isEdit" @click="handelEdit(todo)">编辑</button>
    </li>

</template>

<script>
	import pubsub from 'pubsub-js'
    export default {
        name:'MyItem',
        //接收组件标签的属性值
        props:['todo',],
        // mounted(){
        //     console.log(this.todo)
        // },
		methods:{
			// 勾选or取消勾选
			handleCheck(id){
				// console.log(id)
				// 通知App组件将对应的todo对象的done值取反
				// this.checkTodo(id)
				// 利用全局事件总线实现
				this.$bus.$emit('checkTodo',id)
			},
			// 删除
			handelDelete(id){
				if(confirm('确定删除吗？')){
					// 判断有没有拿到id
					// console.log(id)
					// this.deleteTodo(id)

					// $bus实现
					// this.$bus.$emit('deleteTodo',id)

					// 这里用pubsub实现
					pubsub.publish('deleteTodo',id)
				}
			},
			// 编辑
			handelEdit(todo){
				// vue会监视Data中的所有数据通过getter、setter方法
				// 但是后面追加的属性不会做响应式处理，就是vue不会重新渲染，要用set
				// todo.isEdit = true
				// 后面还要判断，有这个属性了就不用追加了
				if(todo.hasOwnProperty('isEdit')){
					todo.isEdit = true
				}else{
					// 没有就直接做响应式处理
					this.$set(todo,'isEdit',true)
				}
				// 没有使用延迟定时器不会生效，因为还没有渲染完成,就不能获取焦点
				// setTimeout(() => {
				// 	this.$refs.inputTitle.focus()
				// },200)

				// 官方api实现nextTick下一瞬间：指定的回调函数会在渲染完成之后调用
				this.$nextTick(function(){
					this.$refs.inputTitle.focus()
				})
				
			},
			// 编辑输入框失去焦点
			handelBlur(todo,e){
				todo.isEdit = false
				// 改没有使用双向数据绑定,因为vue不建议修改props里面的数据
				// console.log("要修改的值：",e.target.value)
				if(!e.target.value.trim()) return alert('输入不能为空！')
				this.$bus.$emit('updateTodo',todo.id,e.target.value)
			}

		}

    }
</script>

<style scoped>
    /*item*/
    li {
	list-style: none;
	height: 36px;
	line-height: 36px;
	padding: 0 5px;
	border-bottom: 1px solid #ddd;
	}

	li label {
	float: left;
	cursor: pointer;
	}

	li label li input {
	vertical-align: middle;
	margin-right: 6px;
	position: relative;
	top: -1px;
	}

	li button {
	float: right;
	display: none;
	margin-top: 3px;
	}

	li:before {
	content: initial;
	}

	li:last-child {
	border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}

	li:hover button{
		display:block;
	}
</style>