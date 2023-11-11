// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
//引入vueRouter 
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 关闭Vue的生产提示
Vue.config.productionTip = false
// 使用vue-router插件
Vue.use(VueRouter)

// 创建vm
new Vue({
	el:'#app',
	render:h => h(App),
	// 添加路由配置（属性）
	router,
})