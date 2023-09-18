<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
			<MyHeader :addTodo="addTodo"/>
			<MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
			<MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入组件 .vue可以被省略调
	import MyHeader from './components/MyHeader'
	import MyList from './components/MyList'
	import MyFooter from './components/MyFooter'
	

	export default {
		name:'App',
		components:{MyHeader,MyList,MyFooter},
		data(){
            return {
				//后面的组件都在用，提到这里来，叫状态提升
                // todos:[
                    // {id:'0001',title:'吃饭',done:false},
                    // {id:'0002',title:'睡觉',done:true},
                    // {id:'0003',title:'喝酒',done:false},
                    // {id:'0004',title:'开车',done:true},
                // ]
				todos:JSON.parse(localStorage.getItem('todos')) || []
            }
        },
		methods:{
			// 添加一个todo对象
			addTodo(todoObj){
				console.log('我是App组件,我收到的数据：',todoObj)
				this.todos.unshift(todoObj)
			},
			// 勾选或者取消勾选一个todo
			checkTodo(id){
				this.todos.forEach((todo)=>{
					if(todo.id === id) todo.done = !todo.done
				})
			},
			deleteTodo(id){
				// this.todos = this.todos.filter((todo) => {
				// 	return todo.id !== id
				// })
				this.todos = this.todos.filter(todo => todo.id !== id)
			},
			// 全选or取消全选
			checkAllTodo(done){
				this.todos.forEach((todo) => {
					todo.done = done
				})
			},
			// 清除所有已经完成的todo
			clearAllTodo(){
				this.todos = this.todos.filter((todo) => {
					return !todo.done
				})
			}
		},
		watch:{
			// 浅层监视，里面的值修改监视不到，要深度监视。不能简写
			// todos(value){
			// 	localStorage.setItem('todos',JSON.stringify(value))
			// }
			todos:{
				deep:true,
				handler(nValue){
					localStorage.setItem('todos',JSON.stringify(nValue))
				}
			}
		}
	}
</script>

<!-- App.vue里面一般不要写scoped：最终的样式会被汇总到一起，重名的样式，不写会被覆盖 -->
<style>
	/*base*/
	body {
	background: #fff;
	}

	.btn {
	display: inline-block;
	padding: 4px 12px;
	margin-bottom: 0;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
	}

	.btn-danger {
	color: #fff;
	background-color: #da4f49;
	border: 1px solid #bd362f;
	}

	.btn-danger:hover {
	color: #fff;
	background-color: #bd362f;
	}

	.btn:focus {
	outline: none;
	}

	.todo-container {
	width: 600px;
	margin: 0 auto;
	}
	.todo-container .todo-wrap {
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
	}
</style>