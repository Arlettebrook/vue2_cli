<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- <a href="/message1">{{ m.title }}</a>&nbsp;&nbsp; -->
                <!-- to里面要是字符串，加：不能解析字符串 加``可以解析模板字符串 -->
                <!-- 跳转路由并携带query参数：to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link>&nbsp;&nbsp; -->

                <!-- 跳转路由并携带query参数：to的对象写法 -->
                <router-link :to="{
                    // path:'/home/message/detail',
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title,
                    }
                }">{{ m.title }}&nbsp;&nbsp; hi</router-link>
            </li>
        </ul>
        <hr/>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name:'Message',
        data(){
            return {
                messageList:[
                    {id:'001',title:'消息001'},
                    {id:'002',title:'消息002'},
                    {id:'003',title:'消息003'},
                ]
            }
        }

    }
</script>

<style>

</style>