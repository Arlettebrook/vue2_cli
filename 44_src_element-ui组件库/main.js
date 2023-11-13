// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 完整引入
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';


// 按需引入Button、Select  样式配置好babel会按需引入，修改配置文件需要重启服务器
import { Button,Row,DatePicker } from 'element-ui';

// 关闭Vue的生产提示
Vue.config.productionTip = false
// 使用ElementUI
// Vue.use(ElementUI)   // 完整引入

// 注册全局组件
// Vue.component(组件名，注册的组件) .name使用默认名，可以修改
Vue.component(Button.name, Button);
Vue.component('baidu-row', Row);
Vue.component(DatePicker.name, DatePicker);


// 创建vm
new Vue({
	el:'#app',
	render:h => h(App),

})