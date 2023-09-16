// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

//引入插件
import plugins from './plugins'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 应用（使用）插件 plugins插件名后缀是js，是一个对象，功能写在install方法里面，
// 使用插件之后自动调用install方法，第一个参数是vm，后面的是使用时传递的参数
Vue.use(plugins,3,1,1)

// 创建vm
new Vue({
	el:'#app',
	render:h => h(App)
})