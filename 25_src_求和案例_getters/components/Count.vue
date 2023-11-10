<template>
    <div>
        <!-- 模版里面能够直接访问vc身上的属性 -->
        <h1>当前求和为:{{ $store.state.sum }}</h1>
        <h4>当前求和放大十倍为：{{ $store.getters.bigSum }}</h4>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等在加</button>
    </div>
</template>

<script>
    export default {
        name:'Count',
        data(){
            return {
                n:1, //用户选择的数字，默认为1
                
            }
        },
        methods:{
            increment(){
                // this.$store.dispatch('jia',this.n)
                // 加没有业务逻辑直接提交到mutations
                this.$store.commit('JIA',this.n)
            },
            decrement(){
                this.$store.commit('JIAN',this.n)
            },
            incrementOdd(){
                this.$store.dispatch('jiaOdd',this.n)
                
            },
            incrementWait(){
                this.$store.dispatch('jiaWait',this.n)
            }
        },
        mounted(){
            console.log('Count',this)
        }
    }
</script>

<style scoped lang="css">
    button{
        margin-left: 6px;
    }
</style>