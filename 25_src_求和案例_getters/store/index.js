// 该文件用于创建Vuex中最为核心的store仓库管理
// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

// 使用vuex插件
Vue.use(Vuex)

// 准备actions——用于响应组件中的动作
const actions = {
    // 属性是函数，这样简写：jia：function(){}
    // 在actions中没有业务逻辑可以不用写，直接调用的时候commit，不在dispatch

    // jia(context,value){
    //     console.log('actions中的jia被调用了',context,value)
    //     context.commit('JIA',value)
    // },
    // jian(context,value){
    //     console.log('actions中的jian被调用了',context,value)
    //     context.commit('JIAN',value)
    // },
    
    jiaOdd(context,value){
        console.log('actions中的jiaOdd被调用了',context,value)
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        console.log('actions中的jiaWait被调用了',context,value)
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);
    }
}

// 准备mutations——用于改变数据（state）状态
const mutations = {
    JIA(state,value){
        console.log('mutations中的JIA被调用了',state,value)
        state.sum += value
    },
    JIAN(state,value){
        console.log('mutations中的JIAN被调用了',state,value)
        state.sum -= value
    }
}

// 准备state——用于存储数据（state）
const state = {
    sum:0, // 当前的和
}

// 准备getters——用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})


// 创建store
// const store = new Vuex.Store({
//     // actions:actions,
//     // mutations:mutations,
//     // state:state,

//     // 属性名跟变量名同名可以简写
//     actions,
//     mutations,
//     state,
// })

// // 暴露store，供其他模块使用
// export default store