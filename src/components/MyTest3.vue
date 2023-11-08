<template>
  <div>
    <h1>Vue多个过渡效果实现</h1>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 多个元素要用transition-group,且要有一个唯一表示key属性或者将多个元素用一个div包起来
        特殊需求下不能这样用
    -->
    <transition-group name="hello" appear>
        <h1 v-show="!isShow" key="1">你好啊!vue实现动画</h1>
        <h1 v-show="isShow" key="2">多个过渡：他显示我就不显示</h1>
    </transition-group>
    <br/>

  </div>
</template>

<script>
export default {
    name:'MyTest3',
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