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
                            // path:'detail/:id/:title',
                            path:'detail',
                            component:Detail,
                            // props的第一种写法：值为对象,不推荐，数据是写死的
                            // 该对象中的所有key-value都会以props的形式传递给Detail组件
                            // props:{a:'1',b:'hello'},

                            // props的第二种写法：值为布尔值
                            // 若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传递给Detail组件
                            // props:true,

                            // props的第三中写法：值为函数
                            // props($route){
                                // 结构赋值
                            // props({query}){
                            props({query:{id,title}}){
                                // return {id:$route.query.id,title:$route.query.title}
                                // return {id:query.id,title:query.title}
                                return {id,title}
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

