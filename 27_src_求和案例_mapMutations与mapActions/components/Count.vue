<template>
    <div>
        <!-- 模版里面能够直接访问vc身上的属性 -->
        <h1>当前求和为:{{ sum }}</h1>
        <h3>当前求和放大十倍为：{{ bigSum }}</h3>
        <h3>我在{{ school }},学习{{ subject }}!</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="JIAN(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="jiaWait(n)">等一等在加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'


    export default {
        name:'Count',
        data(){
            return {
                n:1, //用户选择的数字，默认为1
                
            }
        },
        methods:{
            //程序员亲自写commit方法
            // increment(){
            //     // this.$store.dispatch('jia',this.n)
            //     // 加没有业务逻辑直接提交到mutations
            //     this.$store.commit('JIA',this.n)
            // },
            // decrement(){
            //     this.$store.commit('JIAN',this.n)
            // },

        //  借助mapMutations自动生成commit方法，参数调用的时候指定(对象写法)
            ...mapMutations({increment:'JIA'}),

            //数组写法
            ...mapMutations(['JIAN']),


            /* ============================= */

            // 程序员亲自写dispatch方法
            // incrementOdd(){
            //     this.$store.dispatch('jiaOdd',this.n)
                
            // },
            // incrementWait(){
            //     this.$store.dispatch('jiaWait',this.n)
            // },

            // 借助mapActions自动生成dispatch方法，参数调用的时候指定（对象写法）
            ...mapActions({incrementOdd:'jiaOdd'}),

            // 数组写法
            ...mapActions(['jiaWait'])
        },

        mounted(){
            // mapState:简化从state中数据的获取，不用再这样写this.$state.数据
            // 更计算属性差不多
            // console.log('Count',this)
            // 属性默认都是字符串，引号省略了，而值是字符串，不能省略，要不然就是变量
            const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
            console.log(x)
        },
        // 靠程序员自己去写计算属性，可以使用mapState自动生成
        computed:{
            //mapState是一个对象，帮我们自动生成了上面一堆的属性，
            // 借助mapState生成计算属性，从state中读取数据（对象写法）
            // 用对象展开操作符展开，即可使用
            // 同名也不能简写，展开后没有引号,要不然会识别成变量{sum,school},{sum:sum,school:school}
            // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'})

            // 借助mapState生成计算属性，从state中读取数据（数组写法）
            // 这种写法是计算属性名与state中的数据名同名
            ...mapState(['sum','school','subject']),


            /* ================================ */
            // 手写
            // bigSum(){
            //     return this.getters.bigSum
            // }


            // 自动生成$store.getters.bigSum
            // 借助mapGetters生成计算属性，从getters中读取数据（对象写法）
            // ...mapGetters({bigSum:'bigSum'})
            // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
            ...mapGetters(['bigSum'])


            
        }
    }
</script>

<style scoped lang="css">
    button{
        margin-left: 6px;
    }
</style>