<template>
  <div>
    <h1>Vue动画效果实现</h1>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <h1 v-show="isShow" class="come">你好啊!css修改来和去的动画</h1> -->
    <!-- 使用vue动画不用修改come和go 
        transition过度没有name属性，默认前缀为v
        v-enter-active
        v-leave-active
        hello-enter-active
        设置一出现就执行动画，利用属性appear,要布尔值，加绑定解析成布尔值就不报错:appear="true"
        或者直接写appear属性
    -->
    <transition name="hello" appear>
        <h1 v-show="isShow" >你好啊!vue实现动画</h1>
    </transition>
  </div>
</template>

<script>
export default {
    name:'MyTest',
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
    }

    /* css动画代码，使用vue实现（也要写动画）啊啊啊 */
    .hello-enter-active{
        animation: baidu 0.5s linear;
    }

    .hello-leave-active{
        animation: baidu 0.5s linear reverse;
    }

    .come{
        animation: baidu 1s;
    }

    .go{
        animation: baidu 1s reverse;
    }

    @keyframes baidu {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>