<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color:red">Count组件的求和为:{{ sum }}</h3>
        <h3>列表中第一个人的名字是：{{ firstPersonName }}</h3>
        <input type="text" placeholder="请输入名字" 
            v-model="name"
            @keyup.enter="add"
        >
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addPersonServer">添加一个人，名字随机</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
            
        </ul>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters} from 'vuex'
    import {nanoid} from 'nanoid'
    export default {
        name:'Person',
        data(){
            return {
                name:''
            }
        },
        computed:{
            personList(){
                return this.$store.state.personAbout.personList
            },
            // ...mapState('countAbout',['sum']),
            // ...mapState('personAbout',['personList']),
            sum(){
                return this.$store.state.countAbout.sum
            },
            firstPersonName(){
                // 这里要这样，在多模块中state和getters中的属性不一样：前面是. 后面是/

                // 这写法不对
                // return this.$store.getters.personAbout/firstPersonName
                // 获取对象属性的另外一种写法
                return this.$store.getters['personAbout/firstPersonName']
            },
            // ...mapGetters('personAbout',['firstPersonName'])
        },
        methods:{
            add(){
                const personObj = {id:nanoid(),name:this.name}
                // console.log(personObj)
                this.$store.commit('personAbout/ADD_PERSON',personObj)
                // this.ADD_PERSON(personObj)
                this.name=''
            },
            // ...mapMutations('personAbout',['ADD_PERSON'])

            addWang(){
                const personObj = {in:nanoid(),name:this.name}
                this.$store.dispatch('personAbout/addPersonWang',personObj)
                this.name = ''
            },
            addPersonServer(){
                this.$store.dispatch('personAbout/addPersonServer')
            }
        },
        mounted(){
            console.log('person:',this)
        }
    }


</script>

<style>

</style>