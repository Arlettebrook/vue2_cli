// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入插件（另外一个发送Ajax请求的库）npm i axios | npm i vue-resource这是个插件
import vueResource from 'vue-resource'


// 关闭Vue的生产提示
Vue.config.productionTip = false

// 使用插件
Vue.use(vueResource)

// 创建vm
new Vue({
	el:'#app',
	render:h => h(App),
	beforeCreate(){
		Vue.prototype.$bus = this
	}
})