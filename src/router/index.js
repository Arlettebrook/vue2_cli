// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../components/About'
import Home from '../components/Home'

// 创建并暴露一个路由器     路由就是一组kv对应关系，由路由器管理
export default new VueRouter({
    // 路由规则：
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})

