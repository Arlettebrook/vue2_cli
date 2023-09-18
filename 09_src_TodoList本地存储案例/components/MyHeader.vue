<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="title"/>

    </div>
  
</template>

<script>
    // nanoid uuid的精简版：安装：npm i nanoid
    import {nanoid} from 'nanoid'
    export default {
        name:'MyHeader',
        methods:{
            add(){
                // 校验数据
                if (!this.title.trim()){
                    // console.log(this)
                    alert('输入不能为空！')
                    this.title = '' 
                    return 
                } 
                // 将用户的输入包装成一个todo对象
                const todoObj = {id:nanoid(),title:this.title.trim(),done:false}
                // console.log('@',todoObj)
                // 通知App组件去添加一个todo对象
                this.addTodo(todoObj)
                // 清空输入
                this.title = ''
            }
        },
        props:['addTodo'],
        data(){
            return {
                title:''
            }
        }

    }
</script>

<style scoped>
    /*header*/
	.todo-header input {
	width: 560px;
	height: 28px;
	font-size: 14px;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 4px 7px;
	}

	.todo-header input:focus {
	outline: none;
	border-color: rgba(82, 168, 236, 0.8);
	box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>