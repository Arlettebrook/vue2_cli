// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器     路由就是一组kv对应关系，由路由器管理
export default new VueRouter({
    // 路由规则：
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    // 子路由不加斜杠
                    path:'news',
                    component:News
                },
                {   
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail/:id/:title',
                            component:Detail
                        }
                    ]
                }
            ]
        }
    ]
})

