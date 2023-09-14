const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 避免构建后的代码中出现未转译的第三方依赖。
  transpileDependencies: true,
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },
	lintOnSave:false, //关闭语法检查
})
