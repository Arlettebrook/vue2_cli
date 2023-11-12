<template>
    <div>
        <h2>我是About的内容</h2>
        <slot/>
    </div>
</template>

<script>
    export default {
        name:'About',
        beforeDestroy(){
            console.log('About路由组件即将被销毁了')
        },
        mounted(){
            console.log('About路由组件挂载完毕了',this)
        },
        // 组件内 路由守卫
        // 通过路由规则，进入组件时调用（不通过路由规则不调用）
        beforeRouteEnter(to,from,next){
            console.log('@组件内路由守卫(进入时调用):About-beforeRouteEnter',to,from)
            // if(to.path === '/home/news' || to.path === '/home/message'){
                //meta里面添加的配置对象性才生效
            if(to.meta.isAuth){ // 判断是否需要权限（简化的写法）
                if(localStorage.getItem('school') === 'baidu'){
                    next()
                }else{
                    alert('学校名不对，无权限查看！')
                }
            }else{
                next()
            }
        },

        // 通过路由规则，离开组件时调用
        beforeRouteLeave (to, from, next) {
            console.log('@组件内路由守卫(离开时调用):About-beforeRouteLeave',to,from)
            next()
        }
    }
</script>

<style>

</style>