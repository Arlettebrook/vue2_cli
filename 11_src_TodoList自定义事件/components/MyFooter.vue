<template>
    <div class="todo-footer" v-show="total">
        <label>
			<!-- 方法一：计算属性没有写setter方法 -->
        <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
		<input type="checkbox" v-model="isAll"/>
        </label>
        <span>
        <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:'MyFooter',
		props:['todos',],
		computed:{
			doneTotal(){
				// 方法一：
				// let i = 0
				// this.todos.forEach((todo) => {
				// 	if(todo.done) i++
				// })
				// return i

				// 方法二：累加器reduce
				// const x = this.todos.reduce((total,current) => {
				// 	console.log('@',total,current)
				// 	return total + (current.done ? 1 : 0)
				// },0)
				// console.log('####',x)
				// return x
				// 简写
				return this.todos.reduce((total,current) => total + (current.done ? 1 : 0),0)


			},
			total(){
				return this.todos.length
			},
			// 没有写setter方法，值被修改时会错，适合方法一
			// isAll(){
			// 	return this.doneTotal === this.total && this.total > 0
			// }
			isAll:{
				get(){
					return this.doneTotal === this.total && this.total > 0
				},

				set(value){
					// console.log(value)
					// this.checkAllTodo(value)
					this.$emit('checkAllTodo',value)
				}
			}

		},
		// 方法一的写法：使用方法二这里的代码没有用了
		methods:{
			checkAll(event){
				// 获取选没选的状态
				// console.log(event.target.checked)
				// this.checkAllTodo(event.target.checked)
				this.$emit('checkAllTodo',event.target.checked)
			},
			clearAll(){
				if(confirm('确定清除已完成的任务？')) {
					// this.clearAllTodo()
					this.$emit('clearAllTodo')
				}
			}
		}
		

    }
</script>

<style>
    /*footer*/
	.todo-footer {
	height: 40px;
	line-height: 40px;
	padding-left: 6px;
	margin-top: 5px;
	}

	.todo-footer label {
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
	}

	.todo-footer label input {
	position: relative;
	top: -1px;
	vertical-align: middle;
	margin-right: 5px;
	}

	.todo-footer button {
	float: right;
	margin-top: 5px;
	}
</style>