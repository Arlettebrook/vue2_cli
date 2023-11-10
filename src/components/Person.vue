<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color:red">Count组件的求和为:{{ sum }}</h3>
        <input type="text" placeholder="请输入名字" 
            v-model="name"
            @keyup.enter="add"
        >
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
            
        </ul>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    import {nanoid} from 'nanoid'
    export default {
        name:'Person',
        data(){
            return {
                name:''
            }
        },
        computed:{
            // personList(){
            //     return this.$store.state.personList
            // },
            ...mapState(['personList','sum']),
            // sum(){
            //     return this.$store.state.sum
            // }
        },
        methods:{
            add(){
                const personObj = {id:nanoid(),name:this.name}
                // console.log(personObj)
                // this.$store.commit('ADD_PERSON',personObj)
                this.ADD_PERSON(personObj)
                this.name=''
            },
            ...mapMutations(['ADD_PERSON'])
        }
    }
</script>

<style>

</style>