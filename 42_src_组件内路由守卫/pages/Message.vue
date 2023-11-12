<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- <a href="/message1">{{ m.title }}</a>&nbsp;&nbsp; -->
                <!-- to里面要是字符串，加：不能解析字符串 加``可以解析模板字符串 -->
                <!-- 跳转路由并携带params参数：to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>&nbsp;&nbsp; -->

                <!-- 跳转路由并携带params参数：to的对象写法 -->
                <router-link :to="{
                    // 如果是params参数，不允许写path，只能用命名路由
                    // path:'/home/message/detail',错，只能写name
                    name:'xiangqing',
                    // params:{
                    query:{
                        id:m.id,
                        title:m.title,
                    }
                }">{{ m.title }}&nbsp;&nbsp; hi&nbsp;&nbsp;</router-link>
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
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
        },
        methods:{
            pushShow(m){
                console.log(this.$router)
                this.$router.push({
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title,
                    }
                }).catch((info) => {
                    // .catch是这个对象的一个方法捕获错误信息，执行回调
                    console.log(info)
                })
            },
            replaceShow(m){
                this.$router.replace({
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title,
                    }
                })

            },
            
        },
        beforeDestroy(){
            console.log('Message组件将被销毁了!')
        }
    }
</script>

<style>

</style>