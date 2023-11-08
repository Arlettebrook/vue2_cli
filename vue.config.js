const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 避免构建后的代码中出现未转译的第三方依赖。
  transpileDependencies: true,
  // pages: {
  //   index: {
  //     //入口
  //     entry: 'src/main.js',
  //   },
  // },
	lintOnSave:false, //关闭语法检查
  
  // 利用vue-cli开启代理服务器，解决发送Ajax请求出现同源策略（跨域问题）
  // 方式一：有以下问题
  // 只能代理一个服务器的访问，根路径下没有的资源才走代理，有同名会优先访问根路径下的同名资源
  // devServer:{
  //   proxy:'http://localhost:5000'
  // }

  // 开启代理服务器：方式二,推荐使用方式二:加了代理前缀就走代理，不加走根路径
  devServer:{
    proxy:{
      // 可以配置多个要走代理的前缀
      // 代理指定的前缀
      '/baidu':{
        target:'http://localhost:5000',
        // 去调代理前缀
        pathRewrite:{'^/baidu':''},
        ws:true,  // 用于支持websocket：客户端与服务器的一种通信方式如http协议
        changeOrigin:true // 默认true,伪装成代理服务器地址访问,同源访问，就是修改host值
      },
      '/demo':{
        target:'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        ws:true,
        changeOrigin:true,
      }
    }
  }
})
