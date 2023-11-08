<template>
  <div>
    <h1>Vue过渡效果实现</h1>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
        <h1 v-show="isShow" >你好啊!vue实现动画</h1>
    </transition>
    <br/>

  </div>
</template>

<script>
export default {
    name:'MyTest2',
    data(){
        return {
            isShow:true        
        }
    }
}
</script>

<style scoped>
    h1{
        background:orange;
        /* 不在这里写过度的效果，不破坏原来写的样式 */
        /* transition: 0.5s linear; */
    }
/* 进入的起点 离开的终点 */
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }

    .hello-enter-active,.hello-leave-active{
        transition: 0.5s linear;
    }

/* 进入的终点 离开的起点 */
    .hello-enter-to,.hello-leave{
        transform: translate(0);
    }



/* 离开的起点 */
/* 优化 */
    /* .hello-leave{
        transform: translateX(0px);
    } */
/* 离开的终点 */
    /* .hello-leave-to{
        transform: translate(-100%);
    } */


</style>