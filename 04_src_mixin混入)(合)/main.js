// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
//引入全局混合
// import {hunhe,hunhe2} from './mixin'

// 关闭Vue的生产提示
Vue.config.productionTip = false
//全局混合，所有组件都会有全局混合的属性和方法
// Vue.mixin(hunhe)
// Vue.mixin(hunhe2)

// 创建vm
new Vue({
	el:'#app',
	render:h => h(App)
})