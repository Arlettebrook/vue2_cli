<template>
    <ul>
        <!-- <li>消息编号：{{$route.params.id}}</li>
        <li>消息标题：{{ $route.params.title }}</li> -->

        <!-- props的布尔值为true，就会将路由组件接收到的所有params参数，以props的形式传递给组件 -->
        <li>消息编号：{{ id }}</li>
        <li>消息标题：{{ title }}</li>


        <!-- <li>a:{{ a }}</li>
        <li>a:{{ b }}</li> -->
    </ul>
</template>

<script>
    export default {
        name:'Detail',
        // props:['a','b'],
        props:['id','title'],
        computed:{
            // id(){
            //     return this.$route.params.id
            // },
            // title(){
            //     return this.$route.params.title
            // }
        },
        mounted(){
            console.log(this.$route)
        }
    }
</script>

<style>

</style>