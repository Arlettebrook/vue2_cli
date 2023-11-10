// 求和功能相关的配置
/* 
    默认暴露:export default 对象
        import 对象名（通常同名）
    
    统一暴露：export {a，b，c，a对象} 
        import {a,c,b对象} from 模块名

    分别暴露：export {a} 
            export {b}
            exprot {对象}

        import {a} from 模块名
        import {对象} from 模块名
    es6:js语法的新标准
*/
export default {
    namespaced:true,
    actions:{
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
    },
    mutations:{
        JIA(state,value){
            console.log('mutations中的JIA被调用了',state,value)
            state.sum += value
        },
        JIAN(state,value){
            console.log('mutations中的JIAN被调用了',state,value)
            state.sum -= value
        },
    },
    state:{
        sum:0, // 当前的和
        school:'百度',
        subject:'backend前端',
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    },
}
