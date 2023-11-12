<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                <!-- <a class="list-group-item" href="./home-news.html">News</a> -->
                <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                <!-- <a class="list-group-item active" href="./home-message.html">Message</a> -->
                <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <!-- <router-view></router-view> -->
            <!-- 缓存路由组件，切换不让它销毁 
                属性include包括那个组件，没有默认全部
                值是组件名，不是路由组件的name属性
            -->
            <keep-alive include="News">
                <router-view/>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Home',
        beforeDestroy(){
            console.log('Home路由组件即将被销毁了')
        },
        mounted(){
            console.log('Home路由组件挂载完毕了',this)
        }
    }
</script>

<style>

</style>