<template>
  <div>
    <transition name="animate__animated animate__bounce" appear
        enter-active-class="animate__wobble"
    >
        <h1>Vue第三方动画:animate.css开箱即用</h1>
    </transition>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 多个元素要用transition-group,且要有一个唯一表示key属性或者将多个元素用一个div包起来
        特殊需求下不能这样用
    -->
    <transition-group 
        name="animate__animated animate__bounce" appear
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
    >
        <h1 v-show="!isShow" key="1">你好啊!vue实现动画</h1>
        <h1 v-show="isShow" key="2">多个过渡：他显示我就不显示</h1>
    </transition-group>
    <br/>

  </div>
</template>

<script>
    import "animate.css"
    export default {
        name:'MyTest4',
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

</style>