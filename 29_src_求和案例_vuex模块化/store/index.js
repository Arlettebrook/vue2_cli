// 该文件用于创建Vuex中最为核心的store仓库管理
// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

import countOptions from './count'
import personOptions from './person'

// 使用vuex插件
Vue.use(Vuex)

// vuex模块化
// // 求和功能相关的配置
// const countOptions = {
//     namespaced:true,
//     actions:{
//         jiaOdd(context,value){
//             console.log('actions中的jiaOdd被调用了',context,value)
//             if(context.state.sum % 2){
//                 context.commit('JIA',value)
//             }
//         },
//         jiaWait(context,value){
//             console.log('actions中的jiaWait被调用了',context,value)
//             setTimeout(() => {
//                 context.commit('JIA',value)
//             }, 500);
//         }
//     },
//     mutations:{
//         JIA(state,value){
//             console.log('mutations中的JIA被调用了',state,value)
//             state.sum += value
//         },
//         JIAN(state,value){
//             console.log('mutations中的JIAN被调用了',state,value)
//             state.sum -= value
//         },
//     },
//     state:{
//         sum:0, // 当前的和
//         school:'百度',
//         subject:'backend前端',
//     },
//     getters:{
//         bigSum(state){
//             return state.sum * 10
//         }
//     },
// }


// // 人员管理相关的配置
// const personOptions = {
//     namespaced:true,
//     actions:{
//         addPersonWang(context,value){
//             if(value.name.indexOf('王') === 0){
//                 context.commit('ADD_PERSON',value)
//             }else{
//                 alert('添加的人必须姓王！')
//             }
//         }
//     },
//     mutations:{
//         ADD_PERSON(state,value){
//             console.log('mutations中的ADD_PERSON被调用了',state,value)
//             state.personList.unshift(value)
//         }
//     },
//     state:{
//         personList:[
//             {id:'001',name:'张三'},
//         ]
//     },
//     getters:{
//         firstPersonName(state){
//             return state.personList[0].name
//         }
//     },
// }

// actions——用于响应组件中的动作
// mutations——用于改变数据（state）状态
// state——用于存储数据（state）
// getters——用于将state中的数据进行加工
//创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions,
    }
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