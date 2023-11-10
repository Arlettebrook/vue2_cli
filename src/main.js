// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入插件（另外一个发送Ajax请求的库）npm i axios | npm i vue-resource这是个插件
import vueResource from 'vue-resource'
// // 引入vuex插件 没在这里引入
// import Vuex from 'vuex'

// 引入store index可以省略
import store from './store'

// 问题：js文件会优先执行import语句，这样会导致报错，因为创建store前要先使用Vue.use(Vuex)
// 解决办法：在创建stroe的js中使用插件

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 使用插件
Vue.use(vueResource)


// 创建vm
new Vue({
	el:'#app',
	render:h => h(App),
	store, //同名简写
	beforeCreate(){
		Vue.prototype.$bus = this
	}
})