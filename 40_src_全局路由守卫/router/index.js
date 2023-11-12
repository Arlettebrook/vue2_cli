// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器     路由就是一组kv对应关系，由路由器管理
const router = new VueRouter({
    // 路由规则：
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'关于'}
            
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    name:'xinwen',
                    // 子路由不加斜杠
                    path:'news',
                    component:News,
                    // 路由元信息，可以往里面自定义对象,添加这个判断是否发行，简化权限校验的作用
                    // 其他的为undifed，为false
                    meta:{isAuth:true,title:'新闻'}
                },
                {   
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            // path:'detail/:id/:title',
                            path:'detail',
                            component:Detail,
                            meta:{isAuth:true,title:'详情'},

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

// 守卫：对路由进行权限控制
// 全局前置路由守卫——每次路由切换之前调用，还有初始化的时候调用
// 每一次路由切换之前都会执行回调函数
router.beforeEach((to,from,next) => {
    console.log('@前置路由守卫：',to,from)
    // if(to.path === '/home/news' || to.path === '/home/message'){
        //meta里面添加的配置对象性才生效
    if(to.meta.isAuth){ // 判断是否需要权限（简化的写法）
        if(localStorage.getItem('school') === 'baidu'){
            next()
        }else{
            alert('学校名不对，无权限查看！')
        }
    }else{
        next()
    }

})

// 全局后置路由守卫——每次路由切换之后调用，还有初始化的时候调用，没有next参数
// 全局后置路由守卫通常用来修改窗口标题
router.afterEach((to,from,next) => {
    console.log('@后置路由守卫：',to,from)
    document.title = to.meta.title || '百度系统'
})

export default router
